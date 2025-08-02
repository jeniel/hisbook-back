import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanFeatureCreateWithoutFeatureInput } from './plan-feature-create-without-feature.input';
import { Type } from 'class-transformer';
import { PlanFeatureCreateOrConnectWithoutFeatureInput } from './plan-feature-create-or-connect-without-feature.input';
import { PlanFeatureCreateManyFeatureInputEnvelope } from './plan-feature-create-many-feature-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PlanFeatureWhereUniqueInput } from './plan-feature-where-unique.input';

@InputType()
export class PlanFeatureCreateNestedManyWithoutFeatureInput {

    @Field(() => [PlanFeatureCreateWithoutFeatureInput], {nullable:true})
    @Type(() => PlanFeatureCreateWithoutFeatureInput)
    create?: Array<PlanFeatureCreateWithoutFeatureInput>;

    @Field(() => [PlanFeatureCreateOrConnectWithoutFeatureInput], {nullable:true})
    @Type(() => PlanFeatureCreateOrConnectWithoutFeatureInput)
    connectOrCreate?: Array<PlanFeatureCreateOrConnectWithoutFeatureInput>;

    @Field(() => PlanFeatureCreateManyFeatureInputEnvelope, {nullable:true})
    @Type(() => PlanFeatureCreateManyFeatureInputEnvelope)
    createMany?: PlanFeatureCreateManyFeatureInputEnvelope;

    @Field(() => [PlanFeatureWhereUniqueInput], {nullable:true})
    @Type(() => PlanFeatureWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlanFeatureWhereUniqueInput, 'id' | 'planId_featureId'>>;
}
