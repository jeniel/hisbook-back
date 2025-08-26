import { PrismaService } from '@/core/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

// Import DTO and ARGS
import { DepartmentArgs } from '@/modules/global/department/args/department.args';
import { CreateDepartmentInput } from '@/modules/global/department/dto/create-department.input';
import { UpdateDepartmentInput } from '@/modules/global/department/dto/update-department.input';

@Injectable()
export class DepartmentService {
  constructor(private readonly prisma: PrismaService) {}

  // Create Department
  async create(dto: CreateDepartmentInput) {
    const department = await this.prisma.department.create({
      data: {
        name: dto.name,
        description: dto.description,
      },
    });

    return {
      message: 'Department created successfully',
      data: department,
    };
  }

  // Find all Departments (with pagination)
  async findAll(args: DepartmentArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    const [total, data] = await Promise.all([
      this.prisma.department.count({ where: args.where }),
      this.prisma.department.findMany({
        where: args.where,
        orderBy: { createdAt: 'asc' },
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

  // Update Department
  async update(id: string, data: UpdateDepartmentInput) {
    await this.prisma.department.update({
      where: { id },
      data,
    });

    return {
      message: 'Department updated successfully',
      success: true,
    };
  }

  // Delete Department
  async delete(id: string) {
    await this.prisma.department.delete({
      where: { id },
    });

    return {
      message: 'Department deleted successfully',
      success: true,
    };
  }
}
