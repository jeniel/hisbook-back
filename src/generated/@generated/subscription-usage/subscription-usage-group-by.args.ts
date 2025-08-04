import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubscriptionUsageWhereInput } from './subscription-usage-where.input';
import { Type } from 'class-transformer';
import { SubscriptionUsageOrderByWithAggregationInput } from './subscription-usage-order-by-with-aggregation.input';
import { SubscriptionUsageScalarFieldEnum } from './subscription-usage-scalar-field.enum';
import { SubscriptionUsageScalarWhereWithAggregatesInput } from './subscription-usage-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SubscriptionUsageCountAggregateInput } from './subscription-usage-count-aggregate.input';
import { SubscriptionUsageAvgAggregateInput } from './subscription-usage-avg-aggregate.input';
import { SubscriptionUsageSumAggregateInput } from './subscription-usage-sum-aggregate.input';
import { SubscriptionUsageMinAggregateInput } from './subscription-usage-min-aggregate.input';
import { SubscriptionUsageMaxAggregateInput } from './subscription-usage-max-aggregate.input';

@ArgsType()
export class SubscriptionUsageGroupByArgs {

    @Field(() => SubscriptionUsageWhereInput, {nullable:true})
    @Type(() => SubscriptionUsageWhereInput)
    where?: SubscriptionUsageWhereInput;

    @Field(() => [SubscriptionUsageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SubscriptionUsageOrderByWithAggregationInput>;

    @Field(() => [SubscriptionUsageScalarFieldEnum], {nullable:false})
    by!: Array<`${SubscriptionUsageScalarFieldEnum}`>;

    @Field(() => SubscriptionUsageScalarWhereWithAggregatesInput, {nullable:true})
    having?: SubscriptionUsageScalarWhereWithAggregatesInput;

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
