import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FacebookDetailsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    fbId!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    about!: number;

    @Field(() => Int, {nullable:false})
    accessToken!: number;

    @Field(() => Int, {nullable:false})
    category!: number;

    @Field(() => Int, {nullable:false})
    fanCount!: number;

    @Field(() => Int, {nullable:false})
    followersCount!: number;

    @Field(() => Int, {nullable:false})
    overallStarRating!: number;

    @Field(() => Int, {nullable:false})
    link!: number;

    @Field(() => Int, {nullable:false})
    website!: number;

    @Field(() => Int, {nullable:false})
    username!: number;

    @Field(() => Int, {nullable:false})
    engagementCount!: number;

    @Field(() => Int, {nullable:false})
    engagementMessage!: number;

    @Field(() => Int, {nullable:false})
    imageUrl!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
