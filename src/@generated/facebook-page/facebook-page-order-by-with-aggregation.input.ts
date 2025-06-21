import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FacebookPageCountOrderByAggregateInput } from './facebook-page-count-order-by-aggregate.input';
import { FacebookPageAvgOrderByAggregateInput } from './facebook-page-avg-order-by-aggregate.input';
import { FacebookPageMaxOrderByAggregateInput } from './facebook-page-max-order-by-aggregate.input';
import { FacebookPageMinOrderByAggregateInput } from './facebook-page-min-order-by-aggregate.input';
import { FacebookPageSumOrderByAggregateInput } from './facebook-page-sum-order-by-aggregate.input';

@InputType()
export class FacebookPageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    fbId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    about?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    accessToken?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    category?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    fanCount?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    followersCount?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    overallStarRating?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    link?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    website?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    username?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    engagementCount?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    engagementMessage?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    imageUrl?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => FacebookPageCountOrderByAggregateInput, {nullable:true})
    _count?: FacebookPageCountOrderByAggregateInput;

    @Field(() => FacebookPageAvgOrderByAggregateInput, {nullable:true})
    _avg?: FacebookPageAvgOrderByAggregateInput;

    @Field(() => FacebookPageMaxOrderByAggregateInput, {nullable:true})
    _max?: FacebookPageMaxOrderByAggregateInput;

    @Field(() => FacebookPageMinOrderByAggregateInput, {nullable:true})
    _min?: FacebookPageMinOrderByAggregateInput;

    @Field(() => FacebookPageSumOrderByAggregateInput, {nullable:true})
    _sum?: FacebookPageSumOrderByAggregateInput;
}
