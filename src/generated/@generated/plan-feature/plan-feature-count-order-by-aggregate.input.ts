import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PlanFeatureCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    planId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    featureId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    limit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    enabled?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
