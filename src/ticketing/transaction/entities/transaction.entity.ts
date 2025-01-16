import { ObjectType, Field, Int } from '@nestjs/graphql';
import { TicketTransaction } from 'src/@generated/ticket-transaction/ticket-transaction.model';

@ObjectType()
export class Meta {
  @Field()
  total: number;

  @Field()
  lastPage: number;

  @Field()
  currentPage: number;

  @Field()
  perPage: number;

  @Field({ nullable: true })
  prev?: number | null;

  @Field({ nullable: true })
  next?: number | null;
}

@ObjectType()
export class TransactionLists {
  @Field(() => [TicketTransaction])
  data: TicketTransaction;

  @Field(() => Meta, { nullable: true })
  meta: Meta;
}
