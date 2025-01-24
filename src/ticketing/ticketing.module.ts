import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { ReportModule } from './report/report.module';
import { TicketConfigModule } from './ticket-config/ticket-config.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [TransactionModule, TicketConfigModule, CommentModule, ReportModule],

})
export class TicketingModule {}
