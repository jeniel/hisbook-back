import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanFeatureWhereInput } from './plan-feature-where.input';
import { Type } from 'class-transformer';
import { PlanFeatureOrderByWithRelationInput } from './plan-feature-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PlanFeatureWhereUniqueInput } from './plan-feature-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlanFeatureCountAggregateInput } from './plan-feature-count-aggregate.input';
import { PlanFeatureAvgAggregateInput } from './plan-feature-avg-aggregate.input';
import { PlanFeatureSumAggregateInput } from './plan-feature-sum-aggregate.input';
import { PlanFeatureMinAggregateInput } from './plan-feature-min-aggregate.input';
import { PlanFeatureMaxAggregateInput } from './plan-feature-max-aggregate.input';

@ArgsType()
export class PlanFeatureAggregateArgs {

    @Field(() => PlanFeatureWhereInput, {nullable:true})
    @Type(() => PlanFeatureWhereInput)
    where?: PlanFeatureWhereInput;

    @Field(() => [PlanFeatureOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlanFeatureOrderByWithRelationInput>;

    @Field(() => PlanFeatureWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PlanFeatureWhereUniqueInput, 'id' | 'planId_featureId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PlanFeatureCountAggregateInput, {nullable:true})
    _count?: PlanFeatureCountAggregateInput;

    @Field(() => PlanFeatureAvgAggregateInput, {nullable:true})
    _avg?: PlanFeatureAvgAggregateInput;

    @Field(() => PlanFeatureSumAggregateInput, {nullable:true})
    _sum?: PlanFeatureSumAggregateInput;

    @Field(() => PlanFeatureMinAggregateInput, {nullable:true})
    _min?: PlanFeatureMinAggregateInput;

    @Field(() => PlanFeatureMaxAggregateInput, {nullable:true})
    _max?: PlanFeatureMaxAggregateInput;
}
