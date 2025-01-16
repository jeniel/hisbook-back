import { Module } from '@nestjs/common';
import { TransactionModule } from './transaction/transaction.module';
import { TicketConfigModule } from './ticket-config/ticket-config.module';

@Module({
  imports: [TransactionModule, TicketConfigModule]
})
export class TicketingModule {}
