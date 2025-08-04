import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanFeatureCreateInput } from './plan-feature-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePlanFeatureArgs {

    @Field(() => PlanFeatureCreateInput, {nullable:false})
    @Type(() => PlanFeatureCreateInput)
    data!: PlanFeatureCreateInput;
}
