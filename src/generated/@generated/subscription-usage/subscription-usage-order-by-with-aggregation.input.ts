import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SubscriptionUsageCountOrderByAggregateInput } from './subscription-usage-count-order-by-aggregate.input';
import { SubscriptionUsageAvgOrderByAggregateInput } from './subscription-usage-avg-order-by-aggregate.input';
import { SubscriptionUsageMaxOrderByAggregateInput } from './subscription-usage-max-order-by-aggregate.input';
import { SubscriptionUsageMinOrderByAggregateInput } from './subscription-usage-min-order-by-aggregate.input';
import { SubscriptionUsageSumOrderByAggregateInput } from './subscription-usage-sum-order-by-aggregate.input';

@InputType()
export class SubscriptionUsageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subscriptionId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    featureId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    usage?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    period?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SubscriptionUsageCountOrderByAggregateInput, {nullable:true})
    _count?: SubscriptionUsageCountOrderByAggregateInput;

    @Field(() => SubscriptionUsageAvgOrderByAggregateInput, {nullable:true})
    _avg?: SubscriptionUsageAvgOrderByAggregateInput;

    @Field(() => SubscriptionUsageMaxOrderByAggregateInput, {nullable:true})
    _max?: SubscriptionUsageMaxOrderByAggregateInput;

    @Field(() => SubscriptionUsageMinOrderByAggregateInput, {nullable:true})
    _min?: SubscriptionUsageMinOrderByAggregateInput;

    @Field(() => SubscriptionUsageSumOrderByAggregateInput, {nullable:true})
    _sum?: SubscriptionUsageSumOrderByAggregateInput;
}
