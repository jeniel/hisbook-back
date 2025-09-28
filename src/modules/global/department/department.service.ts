import { PrismaService } from '@/core/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

// Import DTO and ARGS
import { DepartmentArgs } from '@/modules/global/department/args/department.args';
import { CreateDepartmentInput } from '@/modules/global/department/dto/create-department.input';
import { UpdateDepartmentInput } from '@/modules/global/department/dto/update-department.input';

@Injectable()
export class DepartmentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateDepartmentInput) {
    const department = await this.prisma.department.create({
      data: dto,
    });

    return {
      message: 'Department created successfully',
      data: department,
    };
  }

  async findAll(args: DepartmentArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    // Base filter: start with empty filter
    let where: any = {};

    // Merge optional filters from args.where
    if (args.where) {
      where = { ...where, ...args.where };
    }

    // Search filter by name or description
    if (args.search) {
      where = {
        ...where,
        OR: [
          { name: { contains: args.search, mode: 'insensitive' } },
          { description: { contains: args.search, mode: 'insensitive' } },
        ],
      };
    }

    // Fetch total count and paginated data
    const [total, data] = await Promise.all([
      this.prisma.department.count({ where }),
      this.prisma.department.findMany({
        where,
        orderBy: { name: 'asc' },
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

  async update(id: string, data: UpdateDepartmentInput) {
    await this.prisma.department.update({ where: { id }, data });
    return { message: 'Department updated successfully', success: true };
  }

  async delete(id: string) {
    await this.prisma.department.delete({
      where: { id },
    });
    return { message: 'Department deleted successfully', success: true };
  }

  async findAllForDropdown() {
    return this.prisma.department.findMany({
      orderBy: { name: 'asc' },
      select: {
        id: true,
        name: true,
        description: true,
        isSupport: true,
      },
    });
  }
}
