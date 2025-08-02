import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanFeatureCreateWithoutPlanInput } from './plan-feature-create-without-plan.input';
import { Type } from 'class-transformer';
import { PlanFeatureCreateOrConnectWithoutPlanInput } from './plan-feature-create-or-connect-without-plan.input';
import { PlanFeatureCreateManyPlanInputEnvelope } from './plan-feature-create-many-plan-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PlanFeatureWhereUniqueInput } from './plan-feature-where-unique.input';

@InputType()
export class PlanFeatureUncheckedCreateNestedManyWithoutPlanInput {

    @Field(() => [PlanFeatureCreateWithoutPlanInput], {nullable:true})
    @Type(() => PlanFeatureCreateWithoutPlanInput)
    create?: Array<PlanFeatureCreateWithoutPlanInput>;

    @Field(() => [PlanFeatureCreateOrConnectWithoutPlanInput], {nullable:true})
    @Type(() => PlanFeatureCreateOrConnectWithoutPlanInput)
    connectOrCreate?: Array<PlanFeatureCreateOrConnectWithoutPlanInput>;

    @Field(() => PlanFeatureCreateManyPlanInputEnvelope, {nullable:true})
    @Type(() => PlanFeatureCreateManyPlanInputEnvelope)
    createMany?: PlanFeatureCreateManyPlanInputEnvelope;

    @Field(() => [PlanFeatureWhereUniqueInput], {nullable:true})
    @Type(() => PlanFeatureWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlanFeatureWhereUniqueInput, 'id' | 'planId_featureId'>>;
}
