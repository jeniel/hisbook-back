import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FacebookDetailsCountOrderByAggregateInput } from './facebook-details-count-order-by-aggregate.input';
import { FacebookDetailsAvgOrderByAggregateInput } from './facebook-details-avg-order-by-aggregate.input';
import { FacebookDetailsMaxOrderByAggregateInput } from './facebook-details-max-order-by-aggregate.input';
import { FacebookDetailsMinOrderByAggregateInput } from './facebook-details-min-order-by-aggregate.input';
import { FacebookDetailsSumOrderByAggregateInput } from './facebook-details-sum-order-by-aggregate.input';

@InputType()
export class FacebookDetailsOrderByWithAggregationInput {

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

    @Field(() => FacebookDetailsCountOrderByAggregateInput, {nullable:true})
    _count?: FacebookDetailsCountOrderByAggregateInput;

    @Field(() => FacebookDetailsAvgOrderByAggregateInput, {nullable:true})
    _avg?: FacebookDetailsAvgOrderByAggregateInput;

    @Field(() => FacebookDetailsMaxOrderByAggregateInput, {nullable:true})
    _max?: FacebookDetailsMaxOrderByAggregateInput;

    @Field(() => FacebookDetailsMinOrderByAggregateInput, {nullable:true})
    _min?: FacebookDetailsMinOrderByAggregateInput;

    @Field(() => FacebookDetailsSumOrderByAggregateInput, {nullable:true})
    _sum?: FacebookDetailsSumOrderByAggregateInput;
}
