import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { chats_demoCountOrderByAggregateInput } from './chats-demo-count-order-by-aggregate.input';
import { chats_demoAvgOrderByAggregateInput } from './chats-demo-avg-order-by-aggregate.input';
import { chats_demoMaxOrderByAggregateInput } from './chats-demo-max-order-by-aggregate.input';
import { chats_demoMinOrderByAggregateInput } from './chats-demo-min-order-by-aggregate.input';
import { chats_demoSumOrderByAggregateInput } from './chats-demo-sum-order-by-aggregate.input';

@InputType()
export class chats_demoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    session_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    message?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => chats_demoCountOrderByAggregateInput, {nullable:true})
    _count?: chats_demoCountOrderByAggregateInput;

    @Field(() => chats_demoAvgOrderByAggregateInput, {nullable:true})
    _avg?: chats_demoAvgOrderByAggregateInput;

    @Field(() => chats_demoMaxOrderByAggregateInput, {nullable:true})
    _max?: chats_demoMaxOrderByAggregateInput;

    @Field(() => chats_demoMinOrderByAggregateInput, {nullable:true})
    _min?: chats_demoMinOrderByAggregateInput;

    @Field(() => chats_demoSumOrderByAggregateInput, {nullable:true})
    _sum?: chats_demoSumOrderByAggregateInput;
}
