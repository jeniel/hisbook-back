import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FacebookDetailsCountAggregate } from './facebook-details-count-aggregate.output';
import { FacebookDetailsAvgAggregate } from './facebook-details-avg-aggregate.output';
import { FacebookDetailsSumAggregate } from './facebook-details-sum-aggregate.output';
import { FacebookDetailsMinAggregate } from './facebook-details-min-aggregate.output';
import { FacebookDetailsMaxAggregate } from './facebook-details-max-aggregate.output';

@ObjectType()
export class FacebookDetailsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FacebookDetailsCountAggregate, {nullable:true})
    _count?: FacebookDetailsCountAggregate;

    @Field(() => FacebookDetailsAvgAggregate, {nullable:true})
    _avg?: FacebookDetailsAvgAggregate;

    @Field(() => FacebookDetailsSumAggregate, {nullable:true})
    _sum?: FacebookDetailsSumAggregate;

    @Field(() => FacebookDetailsMinAggregate, {nullable:true})
    _min?: FacebookDetailsMinAggregate;

    @Field(() => FacebookDetailsMaxAggregate, {nullable:true})
    _max?: FacebookDetailsMaxAggregate;
}
