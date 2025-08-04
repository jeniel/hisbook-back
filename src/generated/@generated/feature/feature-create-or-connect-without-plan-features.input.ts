import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';
import { Type } from 'class-transformer';
import { FeatureCreateWithoutPlanFeaturesInput } from './feature-create-without-plan-features.input';

@InputType()
export class FeatureCreateOrConnectWithoutPlanFeaturesInput {

    @Field(() => FeatureWhereUniqueInput, {nullable:false})
    @Type(() => FeatureWhereUniqueInput)
    where!: Prisma.AtLeast<FeatureWhereUniqueInput, 'id' | 'name'>;

    @Field(() => FeatureCreateWithoutPlanFeaturesInput, {nullable:false})
    @Type(() => FeatureCreateWithoutPlanFeaturesInput)
    create!: FeatureCreateWithoutPlanFeaturesInput;
}
