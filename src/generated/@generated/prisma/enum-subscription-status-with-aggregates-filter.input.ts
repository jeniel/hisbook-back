import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionStatus } from './subscription-status.enum';
import { NestedEnumSubscriptionStatusWithAggregatesFilter } from './nested-enum-subscription-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumSubscriptionStatusFilter } from './nested-enum-subscription-status-filter.input';

@InputType()
export class EnumSubscriptionStatusWithAggregatesFilter {

    @Field(() => SubscriptionStatus, {nullable:true})
    equals?: `${SubscriptionStatus}`;

    @Field(() => [SubscriptionStatus], {nullable:true})
    in?: Array<`${SubscriptionStatus}`>;

    @Field(() => [SubscriptionStatus], {nullable:true})
    notIn?: Array<`${SubscriptionStatus}`>;

    @Field(() => NestedEnumSubscriptionStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumSubscriptionStatusFilter, {nullable:true})
    _min?: NestedEnumSubscriptionStatusFilter;

    @Field(() => NestedEnumSubscriptionStatusFilter, {nullable:true})
    _max?: NestedEnumSubscriptionStatusFilter;
}
