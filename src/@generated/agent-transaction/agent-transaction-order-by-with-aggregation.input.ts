import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AgentTransactionCountOrderByAggregateInput } from './agent-transaction-count-order-by-aggregate.input';
import { AgentTransactionMaxOrderByAggregateInput } from './agent-transaction-max-order-by-aggregate.input';
import { AgentTransactionMinOrderByAggregateInput } from './agent-transaction-min-order-by-aggregate.input';

@InputType()
export class AgentTransactionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ticketTransactionId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    profileId?: SortOrderInput;

    @Field(() => AgentTransactionCountOrderByAggregateInput, {nullable:true})
    _count?: AgentTransactionCountOrderByAggregateInput;

    @Field(() => AgentTransactionMaxOrderByAggregateInput, {nullable:true})
    _max?: AgentTransactionMaxOrderByAggregateInput;

    @Field(() => AgentTransactionMinOrderByAggregateInput, {nullable:true})
    _min?: AgentTransactionMinOrderByAggregateInput;
}
