import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Chats_demoCountAggregate } from './chats-demo-count-aggregate.output';
import { Chats_demoMinAggregate } from './chats-demo-min-aggregate.output';
import { Chats_demoMaxAggregate } from './chats-demo-max-aggregate.output';

@ObjectType()
export class AggregateChats_demo {

    @Field(() => Chats_demoCountAggregate, {nullable:true})
    _count?: Chats_demoCountAggregate;

    @Field(() => Chats_demoMinAggregate, {nullable:true})
    _min?: Chats_demoMinAggregate;

    @Field(() => Chats_demoMaxAggregate, {nullable:true})
    _max?: Chats_demoMaxAggregate;
}
