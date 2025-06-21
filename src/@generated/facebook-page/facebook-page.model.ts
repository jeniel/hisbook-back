import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FacebookPage {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    fbId!: string | null;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    about!: string | null;

    @Field(() => String, {nullable:true})
    accessToken!: string | null;

    @Field(() => String, {nullable:true})
    category!: string | null;

    @Field(() => Int, {nullable:true})
    fanCount!: number | null;

    @Field(() => Int, {nullable:true})
    followersCount!: number | null;

    @Field(() => Float, {nullable:true})
    overallStarRating!: number | null;

    @Field(() => String, {nullable:true})
    link!: string | null;

    @Field(() => String, {nullable:true})
    website!: string | null;

    @Field(() => String, {nullable:true})
    username!: string | null;

    @Field(() => Int, {nullable:true})
    engagementCount!: number | null;

    @Field(() => String, {nullable:true})
    engagementMessage!: string | null;

    @Field(() => String, {nullable:true})
    imageUrl!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
