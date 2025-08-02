import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FeatureCountOrderByAggregateInput } from './feature-count-order-by-aggregate.input';
import { FeatureMaxOrderByAggregateInput } from './feature-max-order-by-aggregate.input';
import { FeatureMinOrderByAggregateInput } from './feature-min-order-by-aggregate.input';

@InputType()
export class FeatureOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isActive?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => FeatureCountOrderByAggregateInput, {nullable:true})
    _count?: FeatureCountOrderByAggregateInput;

    @Field(() => FeatureMaxOrderByAggregateInput, {nullable:true})
    _max?: FeatureMaxOrderByAggregateInput;

    @Field(() => FeatureMinOrderByAggregateInput, {nullable:true})
    _min?: FeatureMinOrderByAggregateInput;
}
