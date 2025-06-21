import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FacebookDetailsAvgAggregate {

    @Field(() => Float, {nullable:true})
    fanCount?: number;

    @Field(() => Float, {nullable:true})
    followersCount?: number;

    @Field(() => Float, {nullable:true})
    overallStarRating?: number;

    @Field(() => Float, {nullable:true})
    engagementCount?: number;
}
