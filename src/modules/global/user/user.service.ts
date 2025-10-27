import { PrismaService } from '@/core/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as argon2 from 'argon2'; // Password Hashing

// Import DTO and Args
import { UserArgs } from '@/modules/global/user/args/user.args';
import { CreateUserInput } from '@/modules/global/user/dto/create-user.input';
import { UpdateUserInput } from '@/modules/global/user/dto/update-user.input';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  // -------------------
  // CREATE USER
  // -------------------
  async createUser(dto: CreateUserInput) {
    const hashedPassword = await argon2.hash(dto.password);

    const departmentConnect = dto.departmentId
      ? { connect: { id: dto.departmentId } }
      : undefined;

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        username: dto.username,
        hashedPassword,
        department: departmentConnect,
        role: dto.role ?? ['USER'],
        profile: { create: {} },
      },
      include: { profile: true },
    });

    return { message: 'User created successfully', data: user };
  }

  // -------------------
  // FIND ALL USERS (with search and soft delete)
  // -------------------
  async findAll(args: UserArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    // Base filter: only non-deleted users
    let where: any = { deletedAt: null };

    // Merge optional filters from args.where
    if (args.where) {
      where = { ...where, ...args.where };
    }

    // Search by email, username, or profile name fields
    if (args.search) {
      where = {
        ...where,
        OR: [
          { email: { contains: args.search, mode: 'insensitive' } },
          { username: { contains: args.search, mode: 'insensitive' } },
          {
            profile: {
              firstName: { contains: args.search, mode: 'insensitive' },
            },
          },
          {
            profile: {
              lastName: { contains: args.search, mode: 'insensitive' },
            },
          },
          {
            department: {
              name: { contains: args.search, mode: 'insensitive' },
            },
          },
        ],
      };
    }

    const [total, data] = await Promise.all([
      this.prisma.user.count({ where }),
      this.prisma.user.findMany({
        where,
        include: { profile: true, department: true },
        orderBy: [{ profile: { lastName: 'asc' } }],
        take: perPage,
        skip,
      }),
    ]);

    const lastPage = Math.ceil(total / perPage);

    return {
      data,
      meta: {
        total,
        lastPage,
        currentPage: page,
        perPage,
        prev: page > 1 ? page - 1 : null,
        next: page < lastPage ? page + 1 : null,
      },
    };
  }

  // -------------------
  // UPDATE USER
  // -------------------
  async update(id: string, dto: UpdateUserInput) {
    const data: any = {
      email: dto.email,
      username: dto.username,
      role: dto.role || ['USER'],
    };

    if (dto.password) data.hashedPassword = await argon2.hash(dto.password);

    if (dto.departmentId) {
      data.department = { connect: { id: dto.departmentId } };
    }

    await this.prisma.user.update({
      where: { id },
      data,
    });

    return { message: 'User updated successfully', success: true };
  }

  // -------------------
  // SOFT DELETE USER
  // -------------------
  async delete(id: string) {
    await this.prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return { message: 'User deleted successfully', success: true };
  }
}
