import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingCycle } from './billing-cycle.enum';

@InputType()
export class NestedEnumBillingCycleFilter {

    @Field(() => BillingCycle, {nullable:true})
    equals?: `${BillingCycle}`;

    @Field(() => [BillingCycle], {nullable:true})
    in?: Array<`${BillingCycle}`>;

    @Field(() => [BillingCycle], {nullable:true})
    notIn?: Array<`${BillingCycle}`>;

    @Field(() => NestedEnumBillingCycleFilter, {nullable:true})
    not?: NestedEnumBillingCycleFilter;
}
