import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAuditLogsInput } from '../user/user-create-nested-one-without-audit-logs.input';
import { MissedLogoutTicketCreateNestedOneWithoutAuditLogsInput } from '../missed-logout-ticket/missed-logout-ticket-create-nested-one-without-audit-logs.input';

@InputType()
export class AuditLogCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    action?: string;

    @Field(() => Date, {nullable:true})
    timestamp?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => UserCreateNestedOneWithoutAuditLogsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutAuditLogsInput;

    @Field(() => MissedLogoutTicketCreateNestedOneWithoutAuditLogsInput, {nullable:true})
    ticket?: MissedLogoutTicketCreateNestedOneWithoutAuditLogsInput;
}
