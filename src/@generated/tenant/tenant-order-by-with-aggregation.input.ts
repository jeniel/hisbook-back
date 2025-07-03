import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TenantCountOrderByAggregateInput } from './tenant-count-order-by-aggregate.input';
import { TenantMaxOrderByAggregateInput } from './tenant-max-order-by-aggregate.input';
import { TenantMinOrderByAggregateInput } from './tenant-min-order-by-aggregate.input';

@InputType()
export class TenantOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isActive?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isApprove?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    nanoid?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    chatTableName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    documentTableName?: SortOrderInput;

    @Field(() => TenantCountOrderByAggregateInput, {nullable:true})
    _count?: TenantCountOrderByAggregateInput;

    @Field(() => TenantMaxOrderByAggregateInput, {nullable:true})
    _max?: TenantMaxOrderByAggregateInput;

    @Field(() => TenantMinOrderByAggregateInput, {nullable:true})
    _min?: TenantMinOrderByAggregateInput;
}
