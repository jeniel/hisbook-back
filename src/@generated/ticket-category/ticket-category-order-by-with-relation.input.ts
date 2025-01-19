import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TicketTransactionOrderByRelationAggregateInput } from '../ticket-transaction/ticket-transaction-order-by-relation-aggregate.input';

@InputType()
export class TicketCategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => TicketTransactionOrderByRelationAggregateInput, {nullable:true})
    ticketTransaction?: TicketTransactionOrderByRelationAggregateInput;
}
