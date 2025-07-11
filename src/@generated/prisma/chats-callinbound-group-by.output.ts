import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Chats_callinboundCountAggregate } from './chats-callinbound-count-aggregate.output';
import { Chats_callinboundAvgAggregate } from './chats-callinbound-avg-aggregate.output';
import { Chats_callinboundSumAggregate } from './chats-callinbound-sum-aggregate.output';
import { Chats_callinboundMinAggregate } from './chats-callinbound-min-aggregate.output';
import { Chats_callinboundMaxAggregate } from './chats-callinbound-max-aggregate.output';

@ObjectType()
export class Chats_callinboundGroupBy {

    @Field(() => String, {nullable:false})
    id!: bigint | number;

    @Field(() => String, {nullable:false})
    session_id!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    message?: any;

    @Field(() => Chats_callinboundCountAggregate, {nullable:true})
    _count?: Chats_callinboundCountAggregate;

    @Field(() => Chats_callinboundAvgAggregate, {nullable:true})
    _avg?: Chats_callinboundAvgAggregate;

    @Field(() => Chats_callinboundSumAggregate, {nullable:true})
    _sum?: Chats_callinboundSumAggregate;

    @Field(() => Chats_callinboundMinAggregate, {nullable:true})
    _min?: Chats_callinboundMinAggregate;

    @Field(() => Chats_callinboundMaxAggregate, {nullable:true})
    _max?: Chats_callinboundMaxAggregate;
}
