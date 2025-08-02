import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Subscription } from '../subscription/subscription.model';
import { Feature } from '../feature/feature.model';

@ObjectType()
export class SubscriptionUsage {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    subscriptionId!: string;

    @Field(() => String, {nullable:false})
    featureId!: string;

    @Field(() => Int, {defaultValue:0,nullable:false})
    usage!: number;

    @Field(() => Date, {nullable:false})
    period!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Subscription, {nullable:false})
    subscription?: Subscription;

    @Field(() => Feature, {nullable:false})
    feature?: Feature;
}
