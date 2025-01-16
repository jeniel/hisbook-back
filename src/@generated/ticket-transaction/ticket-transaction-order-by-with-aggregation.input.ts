import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TicketTransactionCountOrderByAggregateInput } from './ticket-transaction-count-order-by-aggregate.input';
import { TicketTransactionMaxOrderByAggregateInput } from './ticket-transaction-max-order-by-aggregate.input';
import { TicketTransactionMinOrderByAggregateInput } from './ticket-transaction-min-order-by-aggregate.input';

@InputType()
export class TicketTransactionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    title?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    priority?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    type?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    category?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    subCategory?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    departmentFrom?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    departmentTo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    profileId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdBy?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedBy?: SortOrderInput;

    @Field(() => TicketTransactionCountOrderByAggregateInput, {nullable:true})
    _count?: TicketTransactionCountOrderByAggregateInput;

    @Field(() => TicketTransactionMaxOrderByAggregateInput, {nullable:true})
    _max?: TicketTransactionMaxOrderByAggregateInput;

    @Field(() => TicketTransactionMinOrderByAggregateInput, {nullable:true})
    _min?: TicketTransactionMinOrderByAggregateInput;
}
