import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanFeatureWhereInput } from './plan-feature-where.input';

@InputType()
export class PlanFeatureListRelationFilter {

    @Field(() => PlanFeatureWhereInput, {nullable:true})
    every?: PlanFeatureWhereInput;

    @Field(() => PlanFeatureWhereInput, {nullable:true})
    some?: PlanFeatureWhereInput;

    @Field(() => PlanFeatureWhereInput, {nullable:true})
    none?: PlanFeatureWhereInput;
}
