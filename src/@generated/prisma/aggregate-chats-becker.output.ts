import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Chats_beckerCountAggregate } from './chats-becker-count-aggregate.output';
import { Chats_beckerMinAggregate } from './chats-becker-min-aggregate.output';
import { Chats_beckerMaxAggregate } from './chats-becker-max-aggregate.output';

@ObjectType()
export class AggregateChats_becker {

    @Field(() => Chats_beckerCountAggregate, {nullable:true})
    _count?: Chats_beckerCountAggregate;

    @Field(() => Chats_beckerMinAggregate, {nullable:true})
    _min?: Chats_beckerMinAggregate;

    @Field(() => Chats_beckerMaxAggregate, {nullable:true})
    _max?: Chats_beckerMaxAggregate;
}
