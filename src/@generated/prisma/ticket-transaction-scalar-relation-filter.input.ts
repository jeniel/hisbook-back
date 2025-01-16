import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionWhereInput } from '../ticket-transaction/ticket-transaction-where.input';

@InputType()
export class TicketTransactionScalarRelationFilter {

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    is?: TicketTransactionWhereInput;

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    isNot?: TicketTransactionWhereInput;
}
