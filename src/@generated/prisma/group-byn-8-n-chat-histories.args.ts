import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { n8n_chat_historiesWhereInput } from '../n-8-n-chat-histories/n-8-n-chat-histories-where.input';
import { Type } from 'class-transformer';
import { n8n_chat_historiesOrderByWithAggregationInput } from '../n-8-n-chat-histories/n-8-n-chat-histories-order-by-with-aggregation.input';
import { N8n_chat_historiesScalarFieldEnum } from './n-8-n-chat-histories-scalar-field.enum';
import { n8n_chat_historiesScalarWhereWithAggregatesInput } from '../n-8-n-chat-histories/n-8-n-chat-histories-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByn8NChatHistoriesArgs {

    @Field(() => n8n_chat_historiesWhereInput, {nullable:true})
    @Type(() => n8n_chat_historiesWhereInput)
    where?: n8n_chat_historiesWhereInput;

    @Field(() => [n8n_chat_historiesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<n8n_chat_historiesOrderByWithAggregationInput>;

    @Field(() => [N8n_chat_historiesScalarFieldEnum], {nullable:false})
    by!: Array<`${N8n_chat_historiesScalarFieldEnum}`>;

    @Field(() => n8n_chat_historiesScalarWhereWithAggregatesInput, {nullable:true})
    having?: n8n_chat_historiesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
