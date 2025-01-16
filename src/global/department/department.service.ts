import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpsertDepartmentInput } from './dto/upsert-department.input';

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
}
