import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeatureCreateWithoutPlanFeaturesInput } from './feature-create-without-plan-features.input';
import { Type } from 'class-transformer';
import { FeatureCreateOrConnectWithoutPlanFeaturesInput } from './feature-create-or-connect-without-plan-features.input';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';

@InputType()
export class FeatureCreateNestedOneWithoutPlanFeaturesInput {

    @Field(() => FeatureCreateWithoutPlanFeaturesInput, {nullable:true})
    @Type(() => FeatureCreateWithoutPlanFeaturesInput)
    create?: FeatureCreateWithoutPlanFeaturesInput;

    @Field(() => FeatureCreateOrConnectWithoutPlanFeaturesInput, {nullable:true})
    @Type(() => FeatureCreateOrConnectWithoutPlanFeaturesInput)
    connectOrCreate?: FeatureCreateOrConnectWithoutPlanFeaturesInput;

    @Field(() => FeatureWhereUniqueInput, {nullable:true})
    @Type(() => FeatureWhereUniqueInput)
    connect?: Prisma.AtLeast<FeatureWhereUniqueInput, 'id' | 'name'>;
}
