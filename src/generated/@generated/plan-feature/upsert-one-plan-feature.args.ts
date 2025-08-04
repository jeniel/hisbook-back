import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlanFeatureWhereUniqueInput } from './plan-feature-where-unique.input';
import { Type } from 'class-transformer';
import { PlanFeatureCreateInput } from './plan-feature-create.input';
import { PlanFeatureUpdateInput } from './plan-feature-update.input';

@ArgsType()
export class UpsertOnePlanFeatureArgs {

    @Field(() => PlanFeatureWhereUniqueInput, {nullable:false})
    @Type(() => PlanFeatureWhereUniqueInput)
    where!: Prisma.AtLeast<PlanFeatureWhereUniqueInput, 'id' | 'planId_featureId'>;

    @Field(() => PlanFeatureCreateInput, {nullable:false})
    @Type(() => PlanFeatureCreateInput)
    create!: PlanFeatureCreateInput;

    @Field(() => PlanFeatureUpdateInput, {nullable:false})
    @Type(() => PlanFeatureUpdateInput)
    update!: PlanFeatureUpdateInput;
}
