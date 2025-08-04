import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PlanOrderByWithRelationInput } from '../plan/plan-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { FeatureOrderByWithRelationInput } from '../feature/feature-order-by-with-relation.input';

@InputType()
export class PlanFeatureOrderByWithRelationInput {

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

    @Field(() => PlanOrderByWithRelationInput, {nullable:true})
    @Type(() => PlanOrderByWithRelationInput)
    plan?: PlanOrderByWithRelationInput;

    @Field(() => FeatureOrderByWithRelationInput, {nullable:true})
    feature?: FeatureOrderByWithRelationInput;
}
