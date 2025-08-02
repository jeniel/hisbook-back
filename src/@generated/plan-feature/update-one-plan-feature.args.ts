import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanFeatureUpdateInput } from './plan-feature-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PlanFeatureWhereUniqueInput } from './plan-feature-where-unique.input';

@ArgsType()
export class UpdateOnePlanFeatureArgs {

    @Field(() => PlanFeatureUpdateInput, {nullable:false})
    @Type(() => PlanFeatureUpdateInput)
    data!: PlanFeatureUpdateInput;

    @Field(() => PlanFeatureWhereUniqueInput, {nullable:false})
    @Type(() => PlanFeatureWhereUniqueInput)
    where!: Prisma.AtLeast<PlanFeatureWhereUniqueInput, 'id' | 'planId_featureId'>;
}
