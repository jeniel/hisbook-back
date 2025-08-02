import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingCycle } from './billing-cycle.enum';

@InputType()
export class EnumBillingCycleFieldUpdateOperationsInput {

    @Field(() => BillingCycle, {nullable:true})
    set?: `${BillingCycle}`;
}
