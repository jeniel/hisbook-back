import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlanFeatureWhereUniqueInput } from './plan-feature-where-unique.input';
import { Type } from 'class-transformer';
import { PlanFeatureCreateWithoutFeatureInput } from './plan-feature-create-without-feature.input';

@InputType()
export class PlanFeatureCreateOrConnectWithoutFeatureInput {

    @Field(() => PlanFeatureWhereUniqueInput, {nullable:false})
    @Type(() => PlanFeatureWhereUniqueInput)
    where!: Prisma.AtLeast<PlanFeatureWhereUniqueInput, 'id' | 'planId_featureId'>;

    @Field(() => PlanFeatureCreateWithoutFeatureInput, {nullable:false})
    @Type(() => PlanFeatureCreateWithoutFeatureInput)
    create!: PlanFeatureCreateWithoutFeatureInput;
}
