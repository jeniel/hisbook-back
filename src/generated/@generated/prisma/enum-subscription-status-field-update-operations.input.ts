import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionStatus } from './subscription-status.enum';

@InputType()
export class EnumSubscriptionStatusFieldUpdateOperationsInput {

    @Field(() => SubscriptionStatus, {nullable:true})
    set?: `${SubscriptionStatus}`;
}
