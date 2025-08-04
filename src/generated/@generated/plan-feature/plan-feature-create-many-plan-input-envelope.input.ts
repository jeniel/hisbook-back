import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanFeatureCreateManyPlanInput } from './plan-feature-create-many-plan.input';
import { Type } from 'class-transformer';

@InputType()
export class PlanFeatureCreateManyPlanInputEnvelope {

    @Field(() => [PlanFeatureCreateManyPlanInput], {nullable:false})
    @Type(() => PlanFeatureCreateManyPlanInput)
    data!: Array<PlanFeatureCreateManyPlanInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
