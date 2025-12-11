/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as argon2 from 'argon2'; // Password Hashing

// Import DTO and Args
import { UserArgs } from '@/modules/global/user/args/user.args';
import { CreateManyUsersInput } from '@/modules/global/user/dto/create-many-user.input';
import { CreateUserInput } from '@/modules/global/user/dto/create-user.input';
import { UpdateUserInput } from '@/modules/global/user/dto/update-user.input';
import * as ExcelJS from 'exceljs';

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

  async createManyUsers(dto: CreateManyUsersInput) {
    const usersData = await Promise.all(
      dto.users.map(async (user) => {
        const hashedPassword = await argon2.hash(user.password);

        return {
          email: user.email,
          username: user.username,
          hashedPassword,
          departmentId: user.departmentId ?? null,
          role: user.role ?? ['USER'],
          profile: { create: {} },
        };
      }),
    );

    const createdUsers = await this.prisma.user.createMany({
      data: usersData.map(({ profile, ...rest }) => rest),
      skipDuplicates: true,
    });

    return { message: 'Users created successfully', count: createdUsers.count };
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

  // FIND ONE USER
  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({
      where: { id, deletedAt: null },
      include: { profile: true, department: true },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
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

  // Export To Excel
  async exportUserExcel(): Promise<Buffer> {
    const users = await this.prisma.user.findMany({
      where: { deletedAt: null },
      include: {
        profile: true,
        department: true, // optional
      },
      orderBy: { createdAt: 'desc' },
    });

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Users');

    sheet.addRow([
      'User UUID',
      'Username',
      'Roles',
      'Department UUID',
      'Department',

      // Profile fields:
      'First Name',
      'Middle Name',
      'Last Name',
      'Employee ID',
      'Gender',
      'Title',
      'Address',
      'Contact',
      'Secondary Contact',
      'Email',

      // Meta:
      'Created At',
      'Deleted At',
    ]);

    users.forEach((u) => {
      sheet.addRow([
        u.id,
        u.username,
        u.role.join(','), // array of roles
        u.departmentId,
        u.department?.name ?? '',

        // Profile fields:
        u.profile?.firstName ?? '',
        u.profile?.middleName ?? '',
        u.profile?.lastName ?? '',
        u.profile?.employeeID ?? '',
        u.profile?.gender ?? '',
        u.profile?.birthDate ?? '',
        u.profile?.title ?? '',
        u.profile?.address ?? '',
        u.profile?.contact ?? '',
        u.profile?.secondaryContact ?? '',
        u.profile?.email ?? '',

        // Meta:
        u.createdAt,
        u.deletedAt,
      ]);
    });

    const arrayBuffer = await workbook.xlsx.writeBuffer();
    return Buffer.from(arrayBuffer);
  }
}
