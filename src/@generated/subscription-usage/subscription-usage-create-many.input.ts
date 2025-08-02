import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class SubscriptionUsageCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    subscriptionId!: string;

    @Field(() => String, {nullable:false})
    featureId!: string;

    @Field(() => Int, {nullable:true})
    usage?: number;

    @Field(() => Date, {nullable:false})
    period!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
