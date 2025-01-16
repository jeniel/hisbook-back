import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { FindManyTicketTransactionArgs } from 'src/@generated/ticket-transaction/find-many-ticket-transaction.args';
import { TicketTransactionWhereInput } from 'src/@generated/ticket-transaction/ticket-transaction-where.input';

@ArgsType()
export class TransactionArgs {
  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  perPage?: number;

  @Field(() => TicketTransactionWhereInput, { nullable: true })
  @Type(() => TicketTransactionWhereInput)
  where?: TicketTransactionWhereInput;
}

// @ArgsType()
// export class FindManyTicketTransactionArgs {

//     @Field(() => TicketTransactionWhereInput, {nullable:true})
//     @Type(() => TicketTransactionWhereInput)
//     where?: TicketTransactionWhereInput;

//     @Field(() => [TicketTransactionOrderByWithRelationInput], {nullable:true})
//     orderBy?: Array<TicketTransactionOrderByWithRelationInput>;

//     @Field(() => TicketTransactionWhereUniqueInput, {nullable:true})
//     cursor?: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

//     @Field(() => Int, {nullable:true})
//     take?: number;

//     @Field(() => Int, {nullable:true})
//     skip?: number;

//     @Field(() => [TicketTransactionScalarFieldEnum], {nullable:true})
//     distinct?: Array<keyof typeof TicketTransactionScalarFieldEnum>;
// }
