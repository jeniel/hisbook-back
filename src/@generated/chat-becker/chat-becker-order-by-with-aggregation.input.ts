import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { chat_beckerCountOrderByAggregateInput } from './chat-becker-count-order-by-aggregate.input';
import { chat_beckerAvgOrderByAggregateInput } from './chat-becker-avg-order-by-aggregate.input';
import { chat_beckerMaxOrderByAggregateInput } from './chat-becker-max-order-by-aggregate.input';
import { chat_beckerMinOrderByAggregateInput } from './chat-becker-min-order-by-aggregate.input';
import { chat_beckerSumOrderByAggregateInput } from './chat-becker-sum-order-by-aggregate.input';

@InputType()
export class chat_beckerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    session_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    message?: `${SortOrder}`;

    @Field(() => chat_beckerCountOrderByAggregateInput, {nullable:true})
    _count?: chat_beckerCountOrderByAggregateInput;

    @Field(() => chat_beckerAvgOrderByAggregateInput, {nullable:true})
    _avg?: chat_beckerAvgOrderByAggregateInput;

    @Field(() => chat_beckerMaxOrderByAggregateInput, {nullable:true})
    _max?: chat_beckerMaxOrderByAggregateInput;

    @Field(() => chat_beckerMinOrderByAggregateInput, {nullable:true})
    _min?: chat_beckerMinOrderByAggregateInput;

    @Field(() => chat_beckerSumOrderByAggregateInput, {nullable:true})
    _sum?: chat_beckerSumOrderByAggregateInput;
}
