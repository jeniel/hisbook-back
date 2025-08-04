import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PlanFeatureOrderByRelationAggregateInput } from '../plan-feature/plan-feature-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { SubscriptionOrderByRelationAggregateInput } from '../subscription/subscription-order-by-relation-aggregate.input';

@InputType()
export class PlanOrderByWithRelationInput {

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

    @Field(() => PlanFeatureOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PlanFeatureOrderByRelationAggregateInput)
    features?: PlanFeatureOrderByRelationAggregateInput;

    @Field(() => SubscriptionOrderByRelationAggregateInput, {nullable:true})
    @Type(() => SubscriptionOrderByRelationAggregateInput)
    subscriptions?: SubscriptionOrderByRelationAggregateInput;
}
