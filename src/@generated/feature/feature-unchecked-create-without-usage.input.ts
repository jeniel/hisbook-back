import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanFeatureUncheckedCreateNestedManyWithoutFeatureInput } from '../plan-feature/plan-feature-unchecked-create-nested-many-without-feature.input';
import { Type } from 'class-transformer';

@InputType()
export class FeatureUncheckedCreateWithoutUsageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    displayName!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PlanFeatureUncheckedCreateNestedManyWithoutFeatureInput, {nullable:true})
    @Type(() => PlanFeatureUncheckedCreateNestedManyWithoutFeatureInput)
    planFeatures?: PlanFeatureUncheckedCreateNestedManyWithoutFeatureInput;
}
