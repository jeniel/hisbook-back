import { PrismaService } from '@/core/database/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Gender } from '@prisma/client';

// Import DTO and ARGS
import { ProfileArgs } from '@/modules/global/profile/args/profile.args';
import { CreateProfileInput } from '@/modules/global/profile/dto/create-profile.input';
import { UpdateProfileInput } from '@/modules/global/profile/dto/update-profile.input';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  // Create Profile
  async create(dto: CreateProfileInput) {
    const profile = await this.prisma.profile.create({
      data: {
        firstName: dto.firstName,
        middleName: dto.middleName,
        lastName: dto.lastName,
        birthDate: dto.birthDate,
        gender: dto.gender as Gender,
        title: dto.title,
        address: dto.address,
        contact: dto.contact,
        avatar: dto.avatar,
        employeeID: dto.employeeID,
        userId: dto.userId,
        departmentId: dto.departmentId,
      },
    });

    return {
      message: 'Profile created successfully',
      data: profile,
    };
  }

  // Find all Profiles (with pagination) For ADMINS
  async findAll(args: ProfileArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    const [total, data] = await Promise.all([
      this.prisma.profile.count({ where: args.where }),
      this.prisma.profile.findMany({
        where: args.where,
        orderBy: { createdAt: 'desc' },
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

  // Find Profile by ID for ADMIN usage
  async findOne(id: string) {
    const profile = await this.prisma.profile.findUnique({ where: { id } });
    if (!profile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }

    return {
      data: profile,
    };
  }

  // Update Profile
  async update(id: string, dto: UpdateProfileInput) {
    await this.findOne(id); // ensure profile exists

    const updatedProfile = await this.prisma.profile.update({
      where: { id },
      data: dto,
    });

    return {
      message: 'Profile updated successfully',
      data: updatedProfile,
    };
  }

  // Delete Profile
  async delete(id: string) {
    await this.findOne(id); // ensure profile exists

    await this.prisma.profile.delete({ where: { id } });

    return {
      message: 'Profile deleted successfully',
      success: true,
    };
  }
}
