import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { n8n_chat_historiesCountOrderByAggregateInput } from './n-8-n-chat-histories-count-order-by-aggregate.input';
import { n8n_chat_historiesAvgOrderByAggregateInput } from './n-8-n-chat-histories-avg-order-by-aggregate.input';
import { n8n_chat_historiesMaxOrderByAggregateInput } from './n-8-n-chat-histories-max-order-by-aggregate.input';
import { n8n_chat_historiesMinOrderByAggregateInput } from './n-8-n-chat-histories-min-order-by-aggregate.input';
import { n8n_chat_historiesSumOrderByAggregateInput } from './n-8-n-chat-histories-sum-order-by-aggregate.input';

@InputType()
export class n8n_chat_historiesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    session_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    message?: `${SortOrder}`;

    @Field(() => n8n_chat_historiesCountOrderByAggregateInput, {nullable:true})
    _count?: n8n_chat_historiesCountOrderByAggregateInput;

    @Field(() => n8n_chat_historiesAvgOrderByAggregateInput, {nullable:true})
    _avg?: n8n_chat_historiesAvgOrderByAggregateInput;

    @Field(() => n8n_chat_historiesMaxOrderByAggregateInput, {nullable:true})
    _max?: n8n_chat_historiesMaxOrderByAggregateInput;

    @Field(() => n8n_chat_historiesMinOrderByAggregateInput, {nullable:true})
    _min?: n8n_chat_historiesMinOrderByAggregateInput;

    @Field(() => n8n_chat_historiesSumOrderByAggregateInput, {nullable:true})
    _sum?: n8n_chat_historiesSumOrderByAggregateInput;
}
