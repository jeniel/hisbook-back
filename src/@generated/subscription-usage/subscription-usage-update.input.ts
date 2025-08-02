import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SubscriptionUpdateOneRequiredWithoutUsageNestedInput } from '../subscription/subscription-update-one-required-without-usage-nested.input';
import { Type } from 'class-transformer';
import { FeatureUpdateOneRequiredWithoutUsageNestedInput } from '../feature/feature-update-one-required-without-usage-nested.input';

@InputType()
export class SubscriptionUsageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    usage?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    period?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => SubscriptionUpdateOneRequiredWithoutUsageNestedInput, {nullable:true})
    @Type(() => SubscriptionUpdateOneRequiredWithoutUsageNestedInput)
    subscription?: SubscriptionUpdateOneRequiredWithoutUsageNestedInput;

    @Field(() => FeatureUpdateOneRequiredWithoutUsageNestedInput, {nullable:true})
    feature?: FeatureUpdateOneRequiredWithoutUsageNestedInput;
}
