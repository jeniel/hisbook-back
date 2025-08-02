import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlanFeatureWhereUniqueInput } from './plan-feature-where-unique.input';
import { Type } from 'class-transformer';
import { PlanFeatureUpdateWithoutFeatureInput } from './plan-feature-update-without-feature.input';

@InputType()
export class PlanFeatureUpdateWithWhereUniqueWithoutFeatureInput {

    @Field(() => PlanFeatureWhereUniqueInput, {nullable:false})
    @Type(() => PlanFeatureWhereUniqueInput)
    where!: Prisma.AtLeast<PlanFeatureWhereUniqueInput, 'id' | 'planId_featureId'>;

    @Field(() => PlanFeatureUpdateWithoutFeatureInput, {nullable:false})
    @Type(() => PlanFeatureUpdateWithoutFeatureInput)
    data!: PlanFeatureUpdateWithoutFeatureInput;
}
