import { Field, InputType, OmitType } from '@nestjs/graphql';
import { TicketTransactionCreateInput } from 'src/@generated/ticket-transaction/ticket-transaction-create.input';

// @InputType()
// export class CreateTransactionInput extends OmitType(
//   TicketTransactionCreateInput,
//   ['id', 'createdAt', 'updatedAt', 'updatedBy', 'createdBy', 'profile'],
// ) {
//   //extend here
//   @Field(() => String)
//   departmentTo?: string;

//   @Field(() => String)
//   departmentFrom?: string;
// }

@InputType()
export class CreateTicket {
  @Field(() => String, {nullable:false})
  title: string;

  @Field(() => String, {nullable:true})
  description?: string;

  @Field(() => String,{nullable:true})
  departmentTo?: string;
}
