import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PlanFeatureUncheckedCreateWithoutFeatureInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    planId!: string;

    @Field(() => Int, {nullable:true})
    limit?: number;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
