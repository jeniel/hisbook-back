import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubscriptionUsageCountAggregate } from './subscription-usage-count-aggregate.output';
import { SubscriptionUsageAvgAggregate } from './subscription-usage-avg-aggregate.output';
import { SubscriptionUsageSumAggregate } from './subscription-usage-sum-aggregate.output';
import { SubscriptionUsageMinAggregate } from './subscription-usage-min-aggregate.output';
import { SubscriptionUsageMaxAggregate } from './subscription-usage-max-aggregate.output';

@ObjectType()
export class SubscriptionUsageGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    subscriptionId!: string;

    @Field(() => String, {nullable:false})
    featureId!: string;

    @Field(() => Int, {nullable:false})
    usage!: number;

    @Field(() => Date, {nullable:false})
    period!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => SubscriptionUsageCountAggregate, {nullable:true})
    _count?: SubscriptionUsageCountAggregate;

    @Field(() => SubscriptionUsageAvgAggregate, {nullable:true})
    _avg?: SubscriptionUsageAvgAggregate;

    @Field(() => SubscriptionUsageSumAggregate, {nullable:true})
    _sum?: SubscriptionUsageSumAggregate;

    @Field(() => SubscriptionUsageMinAggregate, {nullable:true})
    _min?: SubscriptionUsageMinAggregate;

    @Field(() => SubscriptionUsageMaxAggregate, {nullable:true})
    _max?: SubscriptionUsageMaxAggregate;
}
