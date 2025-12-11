import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { AuditLogUncheckedCreateNestedManyWithoutTicketInput } from '../audit-log/audit-log-unchecked-create-nested-many-without-ticket.input';

@InputType()
export class TicketUncheckedCreateWithoutCreatedByInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    seq?: number;

    @Field(() => String, {nullable:true})
    ticketId?: string;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => Date, {nullable:true})
    missedAt?: Date | string;

    @Field(() => String, {nullable:true})
    floor?: string;

    @Field(() => String, {nullable:true})
    screenshot?: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => String, {nullable:true})
    serialNumber?: string;

    @Field(() => Status, {nullable:true})
    status?: `${Status}`;

    @Field(() => String, {nullable:true})
    remarks?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    departmentId!: string;

    @Field(() => AuditLogUncheckedCreateNestedManyWithoutTicketInput, {nullable:true})
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTicketInput;
}
