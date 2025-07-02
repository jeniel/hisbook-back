import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { chats_beckerCountOrderByAggregateInput } from './chats-becker-count-order-by-aggregate.input';
import { chats_beckerMaxOrderByAggregateInput } from './chats-becker-max-order-by-aggregate.input';
import { chats_beckerMinOrderByAggregateInput } from './chats-becker-min-order-by-aggregate.input';

@InputType()
export class chats_beckerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    session_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    message?: SortOrderInput;

    @Field(() => chats_beckerCountOrderByAggregateInput, {nullable:true})
    _count?: chats_beckerCountOrderByAggregateInput;

    @Field(() => chats_beckerMaxOrderByAggregateInput, {nullable:true})
    _max?: chats_beckerMaxOrderByAggregateInput;

    @Field(() => chats_beckerMinOrderByAggregateInput, {nullable:true})
    _min?: chats_beckerMinOrderByAggregateInput;
}
