import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlanFeatureCountAggregate } from './plan-feature-count-aggregate.output';
import { PlanFeatureAvgAggregate } from './plan-feature-avg-aggregate.output';
import { PlanFeatureSumAggregate } from './plan-feature-sum-aggregate.output';
import { PlanFeatureMinAggregate } from './plan-feature-min-aggregate.output';
import { PlanFeatureMaxAggregate } from './plan-feature-max-aggregate.output';

@ObjectType()
export class PlanFeatureGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    planId!: string;

    @Field(() => String, {nullable:false})
    featureId!: string;

    @Field(() => Int, {nullable:true})
    limit?: number;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PlanFeatureCountAggregate, {nullable:true})
    _count?: PlanFeatureCountAggregate;

    @Field(() => PlanFeatureAvgAggregate, {nullable:true})
    _avg?: PlanFeatureAvgAggregate;

    @Field(() => PlanFeatureSumAggregate, {nullable:true})
    _sum?: PlanFeatureSumAggregate;

    @Field(() => PlanFeatureMinAggregate, {nullable:true})
    _min?: PlanFeatureMinAggregate;

    @Field(() => PlanFeatureMaxAggregate, {nullable:true})
    _max?: PlanFeatureMaxAggregate;
}
