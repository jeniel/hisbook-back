import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PlanFeaturePlanIdFeatureIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    planId!: string;

    @Field(() => String, {nullable:false})
    featureId!: string;
}
