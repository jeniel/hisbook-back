import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PlanCountOrderByAggregateInput } from './plan-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { PlanAvgOrderByAggregateInput } from './plan-avg-order-by-aggregate.input';
import { PlanMaxOrderByAggregateInput } from './plan-max-order-by-aggregate.input';
import { PlanMinOrderByAggregateInput } from './plan-min-order-by-aggregate.input';
import { PlanSumOrderByAggregateInput } from './plan-sum-order-by-aggregate.input';

@InputType()
export class PlanOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    displayName?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    currency?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    billingCycle?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isActive?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PlanCountOrderByAggregateInput, {nullable:true})
    @Type(() => PlanCountOrderByAggregateInput)
    _count?: PlanCountOrderByAggregateInput;

    @Field(() => PlanAvgOrderByAggregateInput, {nullable:true})
    @Type(() => PlanAvgOrderByAggregateInput)
    _avg?: PlanAvgOrderByAggregateInput;

    @Field(() => PlanMaxOrderByAggregateInput, {nullable:true})
    @Type(() => PlanMaxOrderByAggregateInput)
    _max?: PlanMaxOrderByAggregateInput;

    @Field(() => PlanMinOrderByAggregateInput, {nullable:true})
    @Type(() => PlanMinOrderByAggregateInput)
    _min?: PlanMinOrderByAggregateInput;

    @Field(() => PlanSumOrderByAggregateInput, {nullable:true})
    @Type(() => PlanSumOrderByAggregateInput)
    _sum?: PlanSumOrderByAggregateInput;
}
