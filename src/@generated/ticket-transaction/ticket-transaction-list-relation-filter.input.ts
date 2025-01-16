import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionWhereInput } from './ticket-transaction-where.input';

@InputType()
export class TicketTransactionListRelationFilter {

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    every?: TicketTransactionWhereInput;

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    some?: TicketTransactionWhereInput;

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    none?: TicketTransactionWhereInput;
}
