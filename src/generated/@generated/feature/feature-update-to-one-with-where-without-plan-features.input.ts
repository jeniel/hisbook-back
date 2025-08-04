import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeatureWhereInput } from './feature-where.input';
import { Type } from 'class-transformer';
import { FeatureUpdateWithoutPlanFeaturesInput } from './feature-update-without-plan-features.input';

@InputType()
export class FeatureUpdateToOneWithWhereWithoutPlanFeaturesInput {

    @Field(() => FeatureWhereInput, {nullable:true})
    @Type(() => FeatureWhereInput)
    where?: FeatureWhereInput;

    @Field(() => FeatureUpdateWithoutPlanFeaturesInput, {nullable:false})
    @Type(() => FeatureUpdateWithoutPlanFeaturesInput)
    data!: FeatureUpdateWithoutPlanFeaturesInput;
}
