import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubscriptionUsageMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    subscriptionId?: string;

    @Field(() => String, {nullable:true})
    featureId?: string;

    @Field(() => Int, {nullable:true})
    usage?: number;

    @Field(() => Date, {nullable:true})
    period?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
