import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { AuditLogUncheckedCreateNestedManyWithoutTicketInput } from '../audit-log/audit-log-unchecked-create-nested-many-without-ticket.input';

@InputType()
export class MissedLogoutTicketUncheckedCreateWithoutCreatedByInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    subject?: string;

    @Field(() => Date, {nullable:true})
    missedAt?: Date | string;

    @Field(() => String, {nullable:true})
    floor?: string;

    @Field(() => String, {nullable:true})
    screenshot?: string;

    @Field(() => Status, {nullable:true})
    status?: `${Status}`;

    @Field(() => String, {nullable:true})
    remarks?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => AuditLogUncheckedCreateNestedManyWithoutTicketInput, {nullable:true})
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTicketInput;
}
