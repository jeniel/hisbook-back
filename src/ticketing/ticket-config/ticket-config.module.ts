import { Module } from '@nestjs/common';
import { TicketConfigService } from './ticket-config.service';
import { TicketConfigResolver } from './ticket-config.resolver';

@Module({
  providers: [TicketConfigResolver, TicketConfigService],
})
export class TicketConfigModule {}
