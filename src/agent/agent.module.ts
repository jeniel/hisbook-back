import { Module } from '@nestjs/common';
import { ChatsModule } from './chats/chats.module';
import { TenantModule } from './tenant/tenant.module';

@Module({
  imports: [ChatsModule, TenantModule]
})
export class AgentModule {}
