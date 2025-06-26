import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Chat_beckerCountAggregate } from './chat-becker-count-aggregate.output';
import { Chat_beckerAvgAggregate } from './chat-becker-avg-aggregate.output';
import { Chat_beckerSumAggregate } from './chat-becker-sum-aggregate.output';
import { Chat_beckerMinAggregate } from './chat-becker-min-aggregate.output';
import { Chat_beckerMaxAggregate } from './chat-becker-max-aggregate.output';

@ObjectType()
export class AggregateChat_becker {

    @Field(() => Chat_beckerCountAggregate, {nullable:true})
    _count?: Chat_beckerCountAggregate;

    @Field(() => Chat_beckerAvgAggregate, {nullable:true})
    _avg?: Chat_beckerAvgAggregate;

    @Field(() => Chat_beckerSumAggregate, {nullable:true})
    _sum?: Chat_beckerSumAggregate;

    @Field(() => Chat_beckerMinAggregate, {nullable:true})
    _min?: Chat_beckerMinAggregate;

    @Field(() => Chat_beckerMaxAggregate, {nullable:true})
    _max?: Chat_beckerMaxAggregate;
}
