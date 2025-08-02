import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumSubscriptionStatusFieldUpdateOperationsInput } from '../prisma/enum-subscription-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumBillingCycleFieldUpdateOperationsInput } from '../prisma/enum-billing-cycle-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { TenantUpdateOneRequiredWithoutSubscriptionNestedInput } from '../tenant/tenant-update-one-required-without-subscription-nested.input';
import { SubscriptionUsageUpdateManyWithoutSubscriptionNestedInput } from '../subscription-usage/subscription-usage-update-many-without-subscription-nested.input';

@InputType()
export class SubscriptionUpdateWithoutPlanInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumSubscriptionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    endDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumBillingCycleFieldUpdateOperationsInput, {nullable:true})
    billingCycle?: EnumBillingCycleFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    lastBillingDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cancellationReason?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TenantUpdateOneRequiredWithoutSubscriptionNestedInput, {nullable:true})
    tenant?: TenantUpdateOneRequiredWithoutSubscriptionNestedInput;

    @Field(() => SubscriptionUsageUpdateManyWithoutSubscriptionNestedInput, {nullable:true})
    usage?: SubscriptionUsageUpdateManyWithoutSubscriptionNestedInput;
}
