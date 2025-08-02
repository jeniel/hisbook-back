import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingCycle } from './billing-cycle.enum';
import { NestedEnumBillingCycleWithAggregatesFilter } from './nested-enum-billing-cycle-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBillingCycleFilter } from './nested-enum-billing-cycle-filter.input';

@InputType()
export class EnumBillingCycleWithAggregatesFilter {

    @Field(() => BillingCycle, {nullable:true})
    equals?: `${BillingCycle}`;

    @Field(() => [BillingCycle], {nullable:true})
    in?: Array<`${BillingCycle}`>;

    @Field(() => [BillingCycle], {nullable:true})
    notIn?: Array<`${BillingCycle}`>;

    @Field(() => NestedEnumBillingCycleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBillingCycleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBillingCycleFilter, {nullable:true})
    _min?: NestedEnumBillingCycleFilter;

    @Field(() => NestedEnumBillingCycleFilter, {nullable:true})
    _max?: NestedEnumBillingCycleFilter;
}
