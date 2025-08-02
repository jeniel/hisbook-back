import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Plan } from '../plan/plan.model';
import { Feature } from '../feature/feature.model';

@ObjectType()
export class PlanFeature {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    planId!: string;

    @Field(() => String, {nullable:false})
    featureId!: string;

    @Field(() => Int, {nullable:true})
    limit!: number | null;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    enabled!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Plan, {nullable:false})
    plan?: Plan;

    @Field(() => Feature, {nullable:false})
    feature?: Feature;
}
