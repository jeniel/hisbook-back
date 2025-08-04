import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FacebookPageSumAggregate {

    @Field(() => Int, {nullable:true})
    fanCount?: number;

    @Field(() => Int, {nullable:true})
    followersCount?: number;

    @Field(() => Float, {nullable:true})
    overallStarRating?: number;

    @Field(() => Int, {nullable:true})
    engagementCount?: number;
}
