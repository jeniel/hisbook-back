import { Module } from '@nestjs/common';
import { TransactionModule } from './transaction/transaction.module';
import { TicketConfigModule } from './ticket-config/ticket-config.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [TransactionModule, TicketConfigModule, CommentModule],
})
export class TicketingModule {}
