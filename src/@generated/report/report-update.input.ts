import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ReportUpdatekeywordsInput } from './report-updatekeywords.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TenantUpdateOneWithoutReportsNestedInput } from '../tenant/tenant-update-one-without-reports-nested.input';

@InputType()
export class ReportUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    session_id?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ReportUpdatekeywordsInput, {nullable:true})
    keywords?: ReportUpdatekeywordsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message_intent?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    createdBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updatedBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => TenantUpdateOneWithoutReportsNestedInput, {nullable:true})
    tenant?: TenantUpdateOneWithoutReportsNestedInput;
}
