import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeatureUpdateWithoutPlanFeaturesInput } from './feature-update-without-plan-features.input';
import { Type } from 'class-transformer';
import { FeatureCreateWithoutPlanFeaturesInput } from './feature-create-without-plan-features.input';
import { FeatureWhereInput } from './feature-where.input';

@InputType()
export class FeatureUpsertWithoutPlanFeaturesInput {

    @Field(() => FeatureUpdateWithoutPlanFeaturesInput, {nullable:false})
    @Type(() => FeatureUpdateWithoutPlanFeaturesInput)
    update!: FeatureUpdateWithoutPlanFeaturesInput;

    @Field(() => FeatureCreateWithoutPlanFeaturesInput, {nullable:false})
    @Type(() => FeatureCreateWithoutPlanFeaturesInput)
    create!: FeatureCreateWithoutPlanFeaturesInput;

    @Field(() => FeatureWhereInput, {nullable:true})
    @Type(() => FeatureWhereInput)
    where?: FeatureWhereInput;
}
