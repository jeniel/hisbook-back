import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PlanFeatureMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    planId?: true;

    @Field(() => Boolean, {nullable:true})
    featureId?: true;

    @Field(() => Boolean, {nullable:true})
    limit?: true;

    @Field(() => Boolean, {nullable:true})
    enabled?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
