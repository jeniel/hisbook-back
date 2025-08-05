import { PrismaService } from '@/core/database/prisma/prisma.service';
import { UserProfileArgs } from '@/modules/global/user/args/user.args';
import { CreateUserProfileInput } from '@/modules/global/user/dto/create-user.input';

import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,

    private readonly configService: ConfigService,
  ) {}

  async createSuperAdmin(payload: CreateUserProfileInput) {
    const hashedPassword = await argon.hash(payload.user.hashedPassword);
    try {
      await this.prisma.user.create({
        data: {
          ...payload.user,
          hashedPassword,
          role: payload.user.role,
          isActive: true,
          isApprove: true,
          profile: {
            create: {
              ...payload.profile,
            },
          },
        },
      });

      return {
        message: 'User created successfully',
        success: true,
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credetials Taken');
        }
      }
      throw error;
    }
  }

  async findAll(args: UserProfileArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    const [total, data] = await Promise.all([
      this.prisma.profile.count({ where: args.where }),
      this.prisma.profile.findMany({
        where: args.where,
        take: perPage,
        skip,
        include: {
          user: true,
        },
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

  async findOne(profileId: string) {
    return await this.prisma.profile.findUnique({
      where: {
        id: profileId,
      },
      include: {
        user: true,
        department: true,
      },
    });
  }

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
