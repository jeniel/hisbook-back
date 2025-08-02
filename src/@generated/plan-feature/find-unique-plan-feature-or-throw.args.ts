import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlanFeatureWhereUniqueInput } from './plan-feature-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePlanFeatureOrThrowArgs {

    @Field(() => PlanFeatureWhereUniqueInput, {nullable:false})
    @Type(() => PlanFeatureWhereUniqueInput)
    where!: Prisma.AtLeast<PlanFeatureWhereUniqueInput, 'id' | 'planId_featureId'>;
}
