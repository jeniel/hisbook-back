import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { TenantUpdateOneWithoutKeywordDailiesNestedInput } from '../tenant/tenant-update-one-without-keyword-dailies-nested.input';

@InputType()
export class keyword_dailyUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyword?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    count?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => TenantUpdateOneWithoutKeywordDailiesNestedInput, {nullable:true})
    tenant?: TenantUpdateOneWithoutKeywordDailiesNestedInput;
}
