import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { UserCreateNestedOneWithoutMissedLogoutTicketInput } from '../user/user-create-nested-one-without-missed-logout-ticket.input';
import { AuditLogCreateNestedManyWithoutTicketInput } from '../audit-log/audit-log-create-nested-many-without-ticket.input';

@InputType()
export class MissedLogoutTicketCreateInput {

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

    @Field(() => UserCreateNestedOneWithoutMissedLogoutTicketInput, {nullable:true})
    createdBy?: UserCreateNestedOneWithoutMissedLogoutTicketInput;

    @Field(() => AuditLogCreateNestedManyWithoutTicketInput, {nullable:true})
    auditLogs?: AuditLogCreateNestedManyWithoutTicketInput;
}
