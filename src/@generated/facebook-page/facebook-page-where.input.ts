import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FacebookPagePostListRelationFilter } from '../facebook-page-post/facebook-page-post-list-relation-filter.input';

@InputType()
export class FacebookPageWhereInput {

    @Field(() => [FacebookPageWhereInput], {nullable:true})
    AND?: Array<FacebookPageWhereInput>;

    @Field(() => [FacebookPageWhereInput], {nullable:true})
    OR?: Array<FacebookPageWhereInput>;

    @Field(() => [FacebookPageWhereInput], {nullable:true})
    NOT?: Array<FacebookPageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fbId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    about?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    accessToken?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    category?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fanCount?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    followersCount?: IntNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    overallStarRating?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    link?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    website?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    username?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    engagementCount?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    engagementMessage?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imageUrl?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => FacebookPagePostListRelationFilter, {nullable:true})
    facebookPagePost?: FacebookPagePostListRelationFilter;
}
