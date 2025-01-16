import { InputType, Int, Field, OmitType } from '@nestjs/graphql';
import { TicketCategoryCreateInput } from 'src/@generated/ticket-category/ticket-category-create.input';
import { TicketTransactionCreateInput } from 'src/@generated/ticket-transaction/ticket-transaction-create.input';

@InputType()
export class CreateTransactionInput extends OmitType(
  TicketTransactionCreateInput,
  ['id', 'createdAt', 'updatedAt', 'updatedBy', 'createdBy', 'profile'],
) {
  //extend here
  // @Field(() => String)
  // profileId?: string;
}
