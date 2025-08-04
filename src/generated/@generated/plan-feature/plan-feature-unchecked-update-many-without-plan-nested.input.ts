import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanFeatureCreateWithoutPlanInput } from './plan-feature-create-without-plan.input';
import { Type } from 'class-transformer';
import { PlanFeatureCreateOrConnectWithoutPlanInput } from './plan-feature-create-or-connect-without-plan.input';
import { PlanFeatureUpsertWithWhereUniqueWithoutPlanInput } from './plan-feature-upsert-with-where-unique-without-plan.input';
import { PlanFeatureCreateManyPlanInputEnvelope } from './plan-feature-create-many-plan-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PlanFeatureWhereUniqueInput } from './plan-feature-where-unique.input';
import { PlanFeatureUpdateWithWhereUniqueWithoutPlanInput } from './plan-feature-update-with-where-unique-without-plan.input';
import { PlanFeatureUpdateManyWithWhereWithoutPlanInput } from './plan-feature-update-many-with-where-without-plan.input';
import { PlanFeatureScalarWhereInput } from './plan-feature-scalar-where.input';

@InputType()
export class PlanFeatureUncheckedUpdateManyWithoutPlanNestedInput {

    @Field(() => [PlanFeatureCreateWithoutPlanInput], {nullable:true})
    @Type(() => PlanFeatureCreateWithoutPlanInput)
    create?: Array<PlanFeatureCreateWithoutPlanInput>;

    @Field(() => [PlanFeatureCreateOrConnectWithoutPlanInput], {nullable:true})
    @Type(() => PlanFeatureCreateOrConnectWithoutPlanInput)
    connectOrCreate?: Array<PlanFeatureCreateOrConnectWithoutPlanInput>;

    @Field(() => [PlanFeatureUpsertWithWhereUniqueWithoutPlanInput], {nullable:true})
    @Type(() => PlanFeatureUpsertWithWhereUniqueWithoutPlanInput)
    upsert?: Array<PlanFeatureUpsertWithWhereUniqueWithoutPlanInput>;

    @Field(() => PlanFeatureCreateManyPlanInputEnvelope, {nullable:true})
    @Type(() => PlanFeatureCreateManyPlanInputEnvelope)
    createMany?: PlanFeatureCreateManyPlanInputEnvelope;

    @Field(() => [PlanFeatureWhereUniqueInput], {nullable:true})
    @Type(() => PlanFeatureWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PlanFeatureWhereUniqueInput, 'id' | 'planId_featureId'>>;

    @Field(() => [PlanFeatureWhereUniqueInput], {nullable:true})
    @Type(() => PlanFeatureWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PlanFeatureWhereUniqueInput, 'id' | 'planId_featureId'>>;

    @Field(() => [PlanFeatureWhereUniqueInput], {nullable:true})
    @Type(() => PlanFeatureWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PlanFeatureWhereUniqueInput, 'id' | 'planId_featureId'>>;

    @Field(() => [PlanFeatureWhereUniqueInput], {nullable:true})
    @Type(() => PlanFeatureWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlanFeatureWhereUniqueInput, 'id' | 'planId_featureId'>>;

    @Field(() => [PlanFeatureUpdateWithWhereUniqueWithoutPlanInput], {nullable:true})
    @Type(() => PlanFeatureUpdateWithWhereUniqueWithoutPlanInput)
    update?: Array<PlanFeatureUpdateWithWhereUniqueWithoutPlanInput>;

    @Field(() => [PlanFeatureUpdateManyWithWhereWithoutPlanInput], {nullable:true})
    @Type(() => PlanFeatureUpdateManyWithWhereWithoutPlanInput)
    updateMany?: Array<PlanFeatureUpdateManyWithWhereWithoutPlanInput>;

    @Field(() => [PlanFeatureScalarWhereInput], {nullable:true})
    @Type(() => PlanFeatureScalarWhereInput)
    deleteMany?: Array<PlanFeatureScalarWhereInput>;
}
