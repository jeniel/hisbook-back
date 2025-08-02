import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanFeatureScalarWhereInput } from './plan-feature-scalar-where.input';
import { Type } from 'class-transformer';
import { PlanFeatureUpdateManyMutationInput } from './plan-feature-update-many-mutation.input';

@InputType()
export class PlanFeatureUpdateManyWithWhereWithoutPlanInput {

    @Field(() => PlanFeatureScalarWhereInput, {nullable:false})
    @Type(() => PlanFeatureScalarWhereInput)
    where!: PlanFeatureScalarWhereInput;

    @Field(() => PlanFeatureUpdateManyMutationInput, {nullable:false})
    @Type(() => PlanFeatureUpdateManyMutationInput)
    data!: PlanFeatureUpdateManyMutationInput;
}
