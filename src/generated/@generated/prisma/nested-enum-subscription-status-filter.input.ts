import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionStatus } from './subscription-status.enum';

@InputType()
export class NestedEnumSubscriptionStatusFilter {

    @Field(() => SubscriptionStatus, {nullable:true})
    equals?: `${SubscriptionStatus}`;

    @Field(() => [SubscriptionStatus], {nullable:true})
    in?: Array<`${SubscriptionStatus}`>;

    @Field(() => [SubscriptionStatus], {nullable:true})
    notIn?: Array<`${SubscriptionStatus}`>;

    @Field(() => NestedEnumSubscriptionStatusFilter, {nullable:true})
    not?: NestedEnumSubscriptionStatusFilter;
}
