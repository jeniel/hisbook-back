import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TicketUpdateOneWithoutAuditLogsNestedInput } from '../ticket/ticket-update-one-without-audit-logs-nested.input';

@InputType()
export class AuditLogUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    action?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    timestamp?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updatedBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => TicketUpdateOneWithoutAuditLogsNestedInput, {nullable:true})
    ticket?: TicketUpdateOneWithoutAuditLogsNestedInput;
}
