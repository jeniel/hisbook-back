import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpsertDepartmentInput } from './dto/upsert-department.input';
import { DepartmentArgs } from './args/department.args';

@Injectable()
export class DepartmentService {
  constructor(private readonly prisma: PrismaService) {}

  async upsert(payload: UpsertDepartmentInput, deptId: string) {
    await this.prisma.department.upsert({
      where: {
        id: deptId || '',
      },
      update: payload,
      create: payload,
    });
    return {
      message: 'Department upserted successfully',
    };
  }

  async findAll(args: DepartmentArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    const [total, data] = await Promise.all([
      this.prisma.department.count({ where: args.where }),
      this.prisma.department.findMany({
        where: args.where,
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
}
