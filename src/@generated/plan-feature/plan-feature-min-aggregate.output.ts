import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PlanFeatureMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    planId?: string;

    @Field(() => String, {nullable:true})
    featureId?: string;

    @Field(() => Int, {nullable:true})
    limit?: number;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
