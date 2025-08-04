import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FacebookPagePostOrderByRelationAggregateInput } from '../facebook-page-post/facebook-page-post-order-by-relation-aggregate.input';

@InputType()
export class FacebookPageOrderByWithRelationInput {

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

    @Field(() => FacebookPagePostOrderByRelationAggregateInput, {nullable:true})
    facebookPagePost?: FacebookPagePostOrderByRelationAggregateInput;
}
