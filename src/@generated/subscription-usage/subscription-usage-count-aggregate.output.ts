import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubscriptionUsageCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    subscriptionId!: number;

    @Field(() => Int, {nullable:false})
    featureId!: number;

    @Field(() => Int, {nullable:false})
    usage!: number;

    @Field(() => Int, {nullable:false})
    period!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
