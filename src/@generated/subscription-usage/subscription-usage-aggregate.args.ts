import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubscriptionUsageWhereInput } from './subscription-usage-where.input';
import { Type } from 'class-transformer';
import { SubscriptionUsageOrderByWithRelationInput } from './subscription-usage-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubscriptionUsageWhereUniqueInput } from './subscription-usage-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubscriptionUsageCountAggregateInput } from './subscription-usage-count-aggregate.input';
import { SubscriptionUsageAvgAggregateInput } from './subscription-usage-avg-aggregate.input';
import { SubscriptionUsageSumAggregateInput } from './subscription-usage-sum-aggregate.input';
import { SubscriptionUsageMinAggregateInput } from './subscription-usage-min-aggregate.input';
import { SubscriptionUsageMaxAggregateInput } from './subscription-usage-max-aggregate.input';

@ArgsType()
export class SubscriptionUsageAggregateArgs {

    @Field(() => SubscriptionUsageWhereInput, {nullable:true})
    @Type(() => SubscriptionUsageWhereInput)
    where?: SubscriptionUsageWhereInput;

    @Field(() => [SubscriptionUsageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubscriptionUsageOrderByWithRelationInput>;

    @Field(() => SubscriptionUsageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SubscriptionUsageWhereUniqueInput, 'id' | 'subscriptionId_featureId_period'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubscriptionUsageCountAggregateInput, {nullable:true})
    _count?: SubscriptionUsageCountAggregateInput;

    @Field(() => SubscriptionUsageAvgAggregateInput, {nullable:true})
    _avg?: SubscriptionUsageAvgAggregateInput;

    @Field(() => SubscriptionUsageSumAggregateInput, {nullable:true})
    _sum?: SubscriptionUsageSumAggregateInput;

    @Field(() => SubscriptionUsageMinAggregateInput, {nullable:true})
    _min?: SubscriptionUsageMinAggregateInput;

    @Field(() => SubscriptionUsageMaxAggregateInput, {nullable:true})
    _max?: SubscriptionUsageMaxAggregateInput;
}
