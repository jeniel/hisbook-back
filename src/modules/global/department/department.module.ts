import { Module } from '@nestjs/common';
import { DepartmentService } from '@/modules/global/department/department.service';
import { DepartmentResolver } from '@/modules/global/department/department.resolver';

@Module({
  providers: [DepartmentResolver, DepartmentService],
})
export class DepartmentModule {}
