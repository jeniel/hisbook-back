import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FacebookPagePostCreateNestedManyWithoutPageInput } from '../facebook-page-post/facebook-page-post-create-nested-many-without-page.input';

@InputType()
export class FacebookPageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    fbId?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    about?: string;

    @Field(() => String, {nullable:true})
    accessToken?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => Int, {nullable:true})
    fanCount?: number;

    @Field(() => Int, {nullable:true})
    followersCount?: number;

    @Field(() => Float, {nullable:true})
    overallStarRating?: number;

    @Field(() => String, {nullable:true})
    link?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => Int, {nullable:true})
    engagementCount?: number;

    @Field(() => String, {nullable:true})
    engagementMessage?: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FacebookPagePostCreateNestedManyWithoutPageInput, {nullable:true})
    facebookPagePost?: FacebookPagePostCreateNestedManyWithoutPageInput;
}
