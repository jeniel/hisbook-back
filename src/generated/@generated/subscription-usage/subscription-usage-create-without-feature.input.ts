import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubscriptionCreateNestedOneWithoutUsageInput } from '../subscription/subscription-create-nested-one-without-usage.input';
import { Type } from 'class-transformer';

@InputType()
export class SubscriptionUsageCreateWithoutFeatureInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    usage?: number;

    @Field(() => Date, {nullable:false})
    period!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SubscriptionCreateNestedOneWithoutUsageInput, {nullable:false})
    @Type(() => SubscriptionCreateNestedOneWithoutUsageInput)
    subscription!: SubscriptionCreateNestedOneWithoutUsageInput;
}
