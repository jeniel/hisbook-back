import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { TicketTransactionWhereInput } from 'src/@generated/ticket-transaction/ticket-transaction-where.input';

@ArgsType()
export class TicketArgs {
  @Field(() => TicketTransactionWhereInput, { nullable: true })
  @Type(() => TicketTransactionWhereInput)
  where?: TicketTransactionWhereInput;
}
