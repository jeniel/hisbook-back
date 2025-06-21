import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FacebookDetailsCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fbId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    about?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    accessToken?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    category?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fanCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    followersCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    overallStarRating?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    link?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    website?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    engagementCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    engagementMessage?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
