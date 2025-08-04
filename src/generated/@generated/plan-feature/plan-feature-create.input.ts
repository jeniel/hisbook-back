import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PlanCreateNestedOneWithoutFeaturesInput } from '../plan/plan-create-nested-one-without-features.input';
import { Type } from 'class-transformer';
import { FeatureCreateNestedOneWithoutPlanFeaturesInput } from '../feature/feature-create-nested-one-without-plan-features.input';

@InputType()
export class PlanFeatureCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    limit?: number;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PlanCreateNestedOneWithoutFeaturesInput, {nullable:false})
    @Type(() => PlanCreateNestedOneWithoutFeaturesInput)
    plan!: PlanCreateNestedOneWithoutFeaturesInput;

    @Field(() => FeatureCreateNestedOneWithoutPlanFeaturesInput, {nullable:false})
    feature!: FeatureCreateNestedOneWithoutPlanFeaturesInput;
}
