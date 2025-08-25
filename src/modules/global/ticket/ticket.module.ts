import { Module } from '@nestjs/common';
import { TicketResolver } from './ticket.resolver';
import { TicketService } from './ticket.service';

@Module({
  providers: [TicketService, TicketResolver],
})
export class TicketModule {}
