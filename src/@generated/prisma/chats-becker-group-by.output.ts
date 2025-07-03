import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Chats_beckerCountAggregate } from './chats-becker-count-aggregate.output';
import { Chats_beckerAvgAggregate } from './chats-becker-avg-aggregate.output';
import { Chats_beckerSumAggregate } from './chats-becker-sum-aggregate.output';
import { Chats_beckerMinAggregate } from './chats-becker-min-aggregate.output';
import { Chats_beckerMaxAggregate } from './chats-becker-max-aggregate.output';

@ObjectType()
export class Chats_beckerGroupBy {

    @Field(() => String, {nullable:false})
    id!: bigint | number;

    @Field(() => String, {nullable:false})
    session_id!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    message?: any;

    @Field(() => Chats_beckerCountAggregate, {nullable:true})
    _count?: Chats_beckerCountAggregate;

    @Field(() => Chats_beckerAvgAggregate, {nullable:true})
    _avg?: Chats_beckerAvgAggregate;

    @Field(() => Chats_beckerSumAggregate, {nullable:true})
    _sum?: Chats_beckerSumAggregate;

    @Field(() => Chats_beckerMinAggregate, {nullable:true})
    _min?: Chats_beckerMinAggregate;

    @Field(() => Chats_beckerMaxAggregate, {nullable:true})
    _max?: Chats_beckerMaxAggregate;
}
