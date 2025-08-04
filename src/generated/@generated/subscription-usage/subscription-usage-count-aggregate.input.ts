import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubscriptionUsageCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    subscriptionId?: true;

    @Field(() => Boolean, {nullable:true})
    featureId?: true;

    @Field(() => Boolean, {nullable:true})
    usage?: true;

    @Field(() => Boolean, {nullable:true})
    period?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
