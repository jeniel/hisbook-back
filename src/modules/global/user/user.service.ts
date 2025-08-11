import { PrismaService } from '@/core/database/prisma/prisma.service';
import { UserArgs } from '@/modules/global/user/args/user.args';
import { CreateUserInput } from '@/modules/global/user/dto/create-user.input';
import { UpdateUserInput } from '@/modules/global/user/dto/update-user.input';

// import { CreateUserProfileInput } from '@/modules/global/user/dto/create-user.input';
// ForbiddenException
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { Prisma } from '@prisma/client';

import * as argon2 from 'argon2'; // Argon2 Secure Password Hashing Algorithm

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  // Create User and Admin depend on what roles
  async createUser(dto: CreateUserInput) {
    const hashedPassword = await argon2.hash(dto.password);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        username: dto.username,
        hashedPassword,
        role: dto.role ? dto.role : ['USER'],
        departmentId: dto.departmentId ?? null,
      },
    });

    return {
      message: 'User created successfully',
      data: user,
    };
  }

  // Find ALL USERS
  async findAll(args: UserArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    const [total, data] = await Promise.all([
      this.prisma.user.count({ where: args.where }),
      this.prisma.user.findMany({
        where: args.where,
        include: {
          department: true, // <-- fetch department relation
        },
        take: perPage,
        skip,
      })
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

  // Update User
  // async update(id: string, data: UpdateUserInput) {
  //   await this.prisma.user.update({
  //     where: { id },
  //     data: {
  //       department: {
  //         connect: { id: departmentId },
  //       },
  //     }
  //   });

  //   return {
  //     message: 'User updated successfully',
  //     success: true,
  //   };
  // }

  // Delete User
  async delete(id: string) {
    await this.prisma.user.delete({
      where: { id },
    });

    return {
      message: 'User deleted successfully',
      success: true,
    };
  }

  // async createSuperAdmin(payload: CreateUserProfileInput) {
  //   const hashedPassword = await argon.hash(payload.user.hashedPassword);
  //   try {
  //     await this.prisma.user.create({
  //       data: {
  //         ...payload.user,
  //         hashedPassword,
  //         role: payload.user.role,
  //         isActive: true,
  //         isApprove: true,
  //         profile: {
  //           create: {
  //             ...payload.profile,
  //           },
  //         },
  //       },
  //     });

  //     return {
  //       message: 'User created successfully',
  //       success: true,
  //     };
  //   } catch (error) {
  //     if (error instanceof Prisma.PrismaClientKnownRequestError) {
  //       if (error.code === 'P2002') {
  //         throw new ForbiddenException('Credetials Taken');
  //       }
  //     }
  //     throw error;
  //   }
  // }

  // async createTenantAdmin(payload: any) {
  //   const hashedPassword = await argon.hash(payload.user.hashedPassword);
  //   try {
  //     await this.prisma.user.create({
  //       data: {
  //         ...payload.user,
  //         hashedPassword,
  //         profile: {
  //           create: {
  //             ...payload.profile,
  //           },
  //         },
  //       },
  //     });

  //     return {
  //       message: 'User created successfully',
  //     };
  //   } catch (error) {
  //     if (error instanceof Prisma.PrismaClientKnownRequestError) {
  //       if (error.code === 'P2002') {
  //         throw new ForbiddenException('Credetials Taken');
  //       }
  //     }
  //     throw error;
  //   }
  // }

  ///end
}
