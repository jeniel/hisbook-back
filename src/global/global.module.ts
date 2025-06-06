import { Module } from '@nestjs/common';
import { DepartmentModule } from './department/department.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DepartmentModule, UserModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class GlobalModule {}
