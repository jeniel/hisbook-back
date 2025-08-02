import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanFeatureCreateManyFeatureInput } from './plan-feature-create-many-feature.input';
import { Type } from 'class-transformer';

@InputType()
export class PlanFeatureCreateManyFeatureInputEnvelope {

    @Field(() => [PlanFeatureCreateManyFeatureInput], {nullable:false})
    @Type(() => PlanFeatureCreateManyFeatureInput)
    data!: Array<PlanFeatureCreateManyFeatureInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
