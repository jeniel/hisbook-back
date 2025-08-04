import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubscriptionUsageAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    usage?: true;
}
