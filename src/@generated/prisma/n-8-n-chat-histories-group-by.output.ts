import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { N8n_chat_historiesCountAggregate } from './n-8-n-chat-histories-count-aggregate.output';
import { N8n_chat_historiesAvgAggregate } from './n-8-n-chat-histories-avg-aggregate.output';
import { N8n_chat_historiesSumAggregate } from './n-8-n-chat-histories-sum-aggregate.output';
import { N8n_chat_historiesMinAggregate } from './n-8-n-chat-histories-min-aggregate.output';
import { N8n_chat_historiesMaxAggregate } from './n-8-n-chat-histories-max-aggregate.output';

@ObjectType()
export class N8n_chat_historiesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    session_id!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    message!: any;

    @Field(() => N8n_chat_historiesCountAggregate, {nullable:true})
    _count?: N8n_chat_historiesCountAggregate;

    @Field(() => N8n_chat_historiesAvgAggregate, {nullable:true})
    _avg?: N8n_chat_historiesAvgAggregate;

    @Field(() => N8n_chat_historiesSumAggregate, {nullable:true})
    _sum?: N8n_chat_historiesSumAggregate;

    @Field(() => N8n_chat_historiesMinAggregate, {nullable:true})
    _min?: N8n_chat_historiesMinAggregate;

    @Field(() => N8n_chat_historiesMaxAggregate, {nullable:true})
    _max?: N8n_chat_historiesMaxAggregate;
}
