import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanFeatureCreateWithoutFeatureInput } from './plan-feature-create-without-feature.input';
import { Type } from 'class-transformer';
import { PlanFeatureCreateOrConnectWithoutFeatureInput } from './plan-feature-create-or-connect-without-feature.input';
import { PlanFeatureUpsertWithWhereUniqueWithoutFeatureInput } from './plan-feature-upsert-with-where-unique-without-feature.input';
import { PlanFeatureCreateManyFeatureInputEnvelope } from './plan-feature-create-many-feature-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PlanFeatureWhereUniqueInput } from './plan-feature-where-unique.input';
import { PlanFeatureUpdateWithWhereUniqueWithoutFeatureInput } from './plan-feature-update-with-where-unique-without-feature.input';
import { PlanFeatureUpdateManyWithWhereWithoutFeatureInput } from './plan-feature-update-many-with-where-without-feature.input';
import { PlanFeatureScalarWhereInput } from './plan-feature-scalar-where.input';

@InputType()
export class PlanFeatureUpdateManyWithoutFeatureNestedInput {

    @Field(() => [PlanFeatureCreateWithoutFeatureInput], {nullable:true})
    @Type(() => PlanFeatureCreateWithoutFeatureInput)
    create?: Array<PlanFeatureCreateWithoutFeatureInput>;

    @Field(() => [PlanFeatureCreateOrConnectWithoutFeatureInput], {nullable:true})
    @Type(() => PlanFeatureCreateOrConnectWithoutFeatureInput)
    connectOrCreate?: Array<PlanFeatureCreateOrConnectWithoutFeatureInput>;

    @Field(() => [PlanFeatureUpsertWithWhereUniqueWithoutFeatureInput], {nullable:true})
    @Type(() => PlanFeatureUpsertWithWhereUniqueWithoutFeatureInput)
    upsert?: Array<PlanFeatureUpsertWithWhereUniqueWithoutFeatureInput>;

    @Field(() => PlanFeatureCreateManyFeatureInputEnvelope, {nullable:true})
    @Type(() => PlanFeatureCreateManyFeatureInputEnvelope)
    createMany?: PlanFeatureCreateManyFeatureInputEnvelope;

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

    @Field(() => [PlanFeatureUpdateWithWhereUniqueWithoutFeatureInput], {nullable:true})
    @Type(() => PlanFeatureUpdateWithWhereUniqueWithoutFeatureInput)
    update?: Array<PlanFeatureUpdateWithWhereUniqueWithoutFeatureInput>;

    @Field(() => [PlanFeatureUpdateManyWithWhereWithoutFeatureInput], {nullable:true})
    @Type(() => PlanFeatureUpdateManyWithWhereWithoutFeatureInput)
    updateMany?: Array<PlanFeatureUpdateManyWithWhereWithoutFeatureInput>;

    @Field(() => [PlanFeatureScalarWhereInput], {nullable:true})
    @Type(() => PlanFeatureScalarWhereInput)
    deleteMany?: Array<PlanFeatureScalarWhereInput>;
}
