import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubscriptionUsageCountAggregate } from './subscription-usage-count-aggregate.output';
import { SubscriptionUsageAvgAggregate } from './subscription-usage-avg-aggregate.output';
import { SubscriptionUsageSumAggregate } from './subscription-usage-sum-aggregate.output';
import { SubscriptionUsageMinAggregate } from './subscription-usage-min-aggregate.output';
import { SubscriptionUsageMaxAggregate } from './subscription-usage-max-aggregate.output';

@ObjectType()
export class AggregateSubscriptionUsage {

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
