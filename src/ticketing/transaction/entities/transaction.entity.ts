import { Field, ObjectType } from '@nestjs/graphql';
import { TicketTransaction } from 'src/@generated/ticket-transaction/ticket-transaction.model';
import { Meta } from 'src/common/entities/pagination-meta';

@ObjectType()
export class TransactionLists {
  @Field(() => [TicketTransaction])
  data: TicketTransaction;

  @Field(() => Meta, { nullable: true })
  meta: Meta;
}
