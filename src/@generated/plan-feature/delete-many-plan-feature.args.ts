import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanFeatureWhereInput } from './plan-feature-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPlanFeatureArgs {

    @Field(() => PlanFeatureWhereInput, {nullable:true})
    @Type(() => PlanFeatureWhereInput)
    where?: PlanFeatureWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
