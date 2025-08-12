import { Module } from '@nestjs/common';
import { DepartmentModule } from '@/modules/global/department/department.module';
import { UserModule } from '@/modules/global/user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [DepartmentModule, UserModule, TicketModule, ProfileModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class GlobalModule {}
