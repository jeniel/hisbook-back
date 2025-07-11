import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { chats_callinboundCountOrderByAggregateInput } from './chats-callinbound-count-order-by-aggregate.input';
import { chats_callinboundAvgOrderByAggregateInput } from './chats-callinbound-avg-order-by-aggregate.input';
import { chats_callinboundMaxOrderByAggregateInput } from './chats-callinbound-max-order-by-aggregate.input';
import { chats_callinboundMinOrderByAggregateInput } from './chats-callinbound-min-order-by-aggregate.input';
import { chats_callinboundSumOrderByAggregateInput } from './chats-callinbound-sum-order-by-aggregate.input';

@InputType()
export class chats_callinboundOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    session_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    message?: SortOrderInput;

    @Field(() => chats_callinboundCountOrderByAggregateInput, {nullable:true})
    _count?: chats_callinboundCountOrderByAggregateInput;

    @Field(() => chats_callinboundAvgOrderByAggregateInput, {nullable:true})
    _avg?: chats_callinboundAvgOrderByAggregateInput;

    @Field(() => chats_callinboundMaxOrderByAggregateInput, {nullable:true})
    _max?: chats_callinboundMaxOrderByAggregateInput;

    @Field(() => chats_callinboundMinOrderByAggregateInput, {nullable:true})
    _min?: chats_callinboundMinOrderByAggregateInput;

    @Field(() => chats_callinboundSumOrderByAggregateInput, {nullable:true})
    _sum?: chats_callinboundSumOrderByAggregateInput;
}
