import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PlanFeatureCountOrderByAggregateInput } from './plan-feature-count-order-by-aggregate.input';
import { PlanFeatureAvgOrderByAggregateInput } from './plan-feature-avg-order-by-aggregate.input';
import { PlanFeatureMaxOrderByAggregateInput } from './plan-feature-max-order-by-aggregate.input';
import { PlanFeatureMinOrderByAggregateInput } from './plan-feature-min-order-by-aggregate.input';
import { PlanFeatureSumOrderByAggregateInput } from './plan-feature-sum-order-by-aggregate.input';

@InputType()
export class PlanFeatureOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    planId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    featureId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    limit?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    enabled?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PlanFeatureCountOrderByAggregateInput, {nullable:true})
    _count?: PlanFeatureCountOrderByAggregateInput;

    @Field(() => PlanFeatureAvgOrderByAggregateInput, {nullable:true})
    _avg?: PlanFeatureAvgOrderByAggregateInput;

    @Field(() => PlanFeatureMaxOrderByAggregateInput, {nullable:true})
    _max?: PlanFeatureMaxOrderByAggregateInput;

    @Field(() => PlanFeatureMinOrderByAggregateInput, {nullable:true})
    _min?: PlanFeatureMinOrderByAggregateInput;

    @Field(() => PlanFeatureSumOrderByAggregateInput, {nullable:true})
    _sum?: PlanFeatureSumOrderByAggregateInput;
}
