import { Module } from '@nestjs/common';
import { ChatsModule } from './chats/chats.module';
import { TenantModule } from './tenant/tenant.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [ChatsModule, TenantModule, ReportsModule]
})
export class AgentModule {}
