import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlanFeatureWhereUniqueInput } from './plan-feature-where-unique.input';
import { Type } from 'class-transformer';
import { PlanFeatureCreateWithoutPlanInput } from './plan-feature-create-without-plan.input';

@InputType()
export class PlanFeatureCreateOrConnectWithoutPlanInput {

    @Field(() => PlanFeatureWhereUniqueInput, {nullable:false})
    @Type(() => PlanFeatureWhereUniqueInput)
    where!: Prisma.AtLeast<PlanFeatureWhereUniqueInput, 'id' | 'planId_featureId'>;

    @Field(() => PlanFeatureCreateWithoutPlanInput, {nullable:false})
    @Type(() => PlanFeatureCreateWithoutPlanInput)
    create!: PlanFeatureCreateWithoutPlanInput;
}
