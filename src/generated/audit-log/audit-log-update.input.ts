import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneWithoutAuditLogsNestedInput } from '../user/user-update-one-without-audit-logs-nested.input';
import { TicketUpdateOneWithoutAuditLogsNestedInput } from '../ticket/ticket-update-one-without-audit-logs-nested.input';

@InputType()
export class AuditLogUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    action?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    timestamp?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updatedBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutAuditLogsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutAuditLogsNestedInput;

    @Field(() => TicketUpdateOneWithoutAuditLogsNestedInput, {nullable:true})
    ticket?: TicketUpdateOneWithoutAuditLogsNestedInput;
}
