import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FacebookPageCountAggregate } from './facebook-page-count-aggregate.output';
import { FacebookPageAvgAggregate } from './facebook-page-avg-aggregate.output';
import { FacebookPageSumAggregate } from './facebook-page-sum-aggregate.output';
import { FacebookPageMinAggregate } from './facebook-page-min-aggregate.output';
import { FacebookPageMaxAggregate } from './facebook-page-max-aggregate.output';

@ObjectType()
export class FacebookPageGroupBy {

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

    @Field(() => FacebookPageCountAggregate, {nullable:true})
    _count?: FacebookPageCountAggregate;

    @Field(() => FacebookPageAvgAggregate, {nullable:true})
    _avg?: FacebookPageAvgAggregate;

    @Field(() => FacebookPageSumAggregate, {nullable:true})
    _sum?: FacebookPageSumAggregate;

    @Field(() => FacebookPageMinAggregate, {nullable:true})
    _min?: FacebookPageMinAggregate;

    @Field(() => FacebookPageMaxAggregate, {nullable:true})
    _max?: FacebookPageMaxAggregate;
}
