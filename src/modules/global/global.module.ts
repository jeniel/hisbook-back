import { DepartmentModule } from '@/modules/global/department/department.module';
import { EventModule } from '@/modules/global/events/event.module';
import { PostModule } from '@/modules/global/post/post.module';
import { UserModule } from '@/modules/global/user/user.module';
import { Module } from '@nestjs/common';
import { CensusModule } from './census/census.module';
import { ProfileModule } from './profile/profile.module';
import { TicketModule } from './ticket/ticket.module';
import { ChatModule } from './chat/chat.module';
import { LangchainModule } from './langchain/langchain.module';

@Module({
  imports: [
    DepartmentModule,
    UserModule,
    TicketModule,
    ProfileModule,
    PostModule,
    CensusModule,
    EventModule,
    ChatModule,
    LangchainModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class GlobalModule {}
