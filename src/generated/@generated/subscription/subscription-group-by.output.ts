import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubscriptionCountAggregate } from './subscription-count-aggregate.output';
import { SubscriptionMinAggregate } from './subscription-min-aggregate.output';
import { SubscriptionMaxAggregate } from './subscription-max-aggregate.output';

@ObjectType()
export class SubscriptionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => SubscriptionCountAggregate, {nullable:true})
    _count?: SubscriptionCountAggregate;

    @Field(() => SubscriptionMinAggregate, {nullable:true})
    _min?: SubscriptionMinAggregate;

    @Field(() => SubscriptionMaxAggregate, {nullable:true})
    _max?: SubscriptionMaxAggregate;
}
