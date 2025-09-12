import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateNestedOneWithoutAuditLogsInput } from '../ticket/ticket-create-nested-one-without-audit-logs.input';

@InputType()
export class AuditLogCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    action?: string;

    @Field(() => String, {nullable:true})
    remarks?: string;

    @Field(() => Date, {nullable:true})
    timestamp?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => TicketCreateNestedOneWithoutAuditLogsInput, {nullable:true})
    ticket?: TicketCreateNestedOneWithoutAuditLogsInput;
}
