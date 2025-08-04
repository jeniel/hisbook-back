import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PlanUpdateOneRequiredWithoutFeaturesNestedInput } from '../plan/plan-update-one-required-without-features-nested.input';
import { Type } from 'class-transformer';
import { FeatureUpdateOneRequiredWithoutPlanFeaturesNestedInput } from '../feature/feature-update-one-required-without-plan-features-nested.input';

@InputType()
export class PlanFeatureUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    limit?: NullableIntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    enabled?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PlanUpdateOneRequiredWithoutFeaturesNestedInput, {nullable:true})
    @Type(() => PlanUpdateOneRequiredWithoutFeaturesNestedInput)
    plan?: PlanUpdateOneRequiredWithoutFeaturesNestedInput;

    @Field(() => FeatureUpdateOneRequiredWithoutPlanFeaturesNestedInput, {nullable:true})
    feature?: FeatureUpdateOneRequiredWithoutPlanFeaturesNestedInput;
}
