import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanFeatureUpdateManyMutationInput } from './plan-feature-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PlanFeatureWhereInput } from './plan-feature-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPlanFeatureArgs {

    @Field(() => PlanFeatureUpdateManyMutationInput, {nullable:false})
    @Type(() => PlanFeatureUpdateManyMutationInput)
    data!: PlanFeatureUpdateManyMutationInput;

    @Field(() => PlanFeatureWhereInput, {nullable:true})
    @Type(() => PlanFeatureWhereInput)
    where?: PlanFeatureWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
