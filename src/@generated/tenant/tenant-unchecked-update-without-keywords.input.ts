import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { EnumDistanceMetricFieldUpdateOperationsInput } from '../prisma/enum-distance-metric-field-update-operations.input';
import { keyword_dailyUncheckedUpdateManyWithoutTenantNestedInput } from '../keyword-daily/keyword-daily-unchecked-update-many-without-tenant-nested.input';
import { UserUncheckedUpdateManyWithoutTenantNestedInput } from '../user/user-unchecked-update-many-without-tenant-nested.input';

@InputType()
export class TenantUncheckedUpdateWithoutKeywordsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isApprove?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nanoid?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    chatTableName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    documentTableName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    collectionName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    size?: NullableIntFieldUpdateOperationsInput;

    @Field(() => EnumDistanceMetricFieldUpdateOperationsInput, {nullable:true})
    distance?: EnumDistanceMetricFieldUpdateOperationsInput;

    @Field(() => keyword_dailyUncheckedUpdateManyWithoutTenantNestedInput, {nullable:true})
    keywordDailies?: keyword_dailyUncheckedUpdateManyWithoutTenantNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutTenantNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput;
}
