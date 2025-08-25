import { DepartmentModule } from '@/modules/global/department/department.module';
import { PostModule } from '@/modules/global/post/post.module';
import { UserModule } from '@/modules/global/user/user.module';
import { Module } from '@nestjs/common';
import { CensusModule } from './census/census.module';
import { ProfileModule } from './profile/profile.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [
    DepartmentModule,
    UserModule,
    TicketModule,
    ProfileModule,
    PostModule,
    CensusModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class GlobalModule {}
