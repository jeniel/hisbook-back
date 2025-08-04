import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionStatus } from './subscription-status.enum';
import { NestedEnumSubscriptionStatusFilter } from './nested-enum-subscription-status-filter.input';

@InputType()
export class EnumSubscriptionStatusFilter {

    @Field(() => SubscriptionStatus, {nullable:true})
    equals?: `${SubscriptionStatus}`;

    @Field(() => [SubscriptionStatus], {nullable:true})
    in?: Array<`${SubscriptionStatus}`>;

    @Field(() => [SubscriptionStatus], {nullable:true})
    notIn?: Array<`${SubscriptionStatus}`>;

    @Field(() => NestedEnumSubscriptionStatusFilter, {nullable:true})
    not?: NestedEnumSubscriptionStatusFilter;
}
