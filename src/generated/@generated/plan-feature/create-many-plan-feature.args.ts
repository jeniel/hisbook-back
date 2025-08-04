import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanFeatureCreateManyInput } from './plan-feature-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPlanFeatureArgs {

    @Field(() => [PlanFeatureCreateManyInput], {nullable:false})
    @Type(() => PlanFeatureCreateManyInput)
    data!: Array<PlanFeatureCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
