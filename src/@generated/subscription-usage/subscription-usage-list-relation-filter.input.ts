import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionUsageWhereInput } from './subscription-usage-where.input';

@InputType()
export class SubscriptionUsageListRelationFilter {

    @Field(() => SubscriptionUsageWhereInput, {nullable:true})
    every?: SubscriptionUsageWhereInput;

    @Field(() => SubscriptionUsageWhereInput, {nullable:true})
    some?: SubscriptionUsageWhereInput;

    @Field(() => SubscriptionUsageWhereInput, {nullable:true})
    none?: SubscriptionUsageWhereInput;
}
