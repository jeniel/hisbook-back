import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubscriptionUsageSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    usage?: true;
}
