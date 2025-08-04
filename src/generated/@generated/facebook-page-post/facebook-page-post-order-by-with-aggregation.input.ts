import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FacebookPagePostCountOrderByAggregateInput } from './facebook-page-post-count-order-by-aggregate.input';
import { FacebookPagePostMaxOrderByAggregateInput } from './facebook-page-post-max-order-by-aggregate.input';
import { FacebookPagePostMinOrderByAggregateInput } from './facebook-page-post-min-order-by-aggregate.input';

@InputType()
export class FacebookPagePostOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    message?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    createdTime?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;

    @Field(() => FacebookPagePostCountOrderByAggregateInput, {nullable:true})
    _count?: FacebookPagePostCountOrderByAggregateInput;

    @Field(() => FacebookPagePostMaxOrderByAggregateInput, {nullable:true})
    _max?: FacebookPagePostMaxOrderByAggregateInput;

    @Field(() => FacebookPagePostMinOrderByAggregateInput, {nullable:true})
    _min?: FacebookPagePostMinOrderByAggregateInput;
}
