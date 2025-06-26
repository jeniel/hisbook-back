import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Chats_demoCountAggregate } from './chats-demo-count-aggregate.output';
import { Chats_demoMinAggregate } from './chats-demo-min-aggregate.output';
import { Chats_demoMaxAggregate } from './chats-demo-max-aggregate.output';

@ObjectType()
export class Chats_demoGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    session_id!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    message?: any;

    @Field(() => Chats_demoCountAggregate, {nullable:true})
    _count?: Chats_demoCountAggregate;

    @Field(() => Chats_demoMinAggregate, {nullable:true})
    _min?: Chats_demoMinAggregate;

    @Field(() => Chats_demoMaxAggregate, {nullable:true})
    _max?: Chats_demoMaxAggregate;
}
