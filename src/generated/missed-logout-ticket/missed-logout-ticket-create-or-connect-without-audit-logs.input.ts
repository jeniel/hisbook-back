import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MissedLogoutTicketWhereUniqueInput } from './missed-logout-ticket-where-unique.input';
import { Type } from 'class-transformer';
import { MissedLogoutTicketCreateWithoutAuditLogsInput } from './missed-logout-ticket-create-without-audit-logs.input';

@InputType()
export class MissedLogoutTicketCreateOrConnectWithoutAuditLogsInput {

    @Field(() => MissedLogoutTicketWhereUniqueInput, {nullable:false})
    @Type(() => MissedLogoutTicketWhereUniqueInput)
    where!: Prisma.AtLeast<MissedLogoutTicketWhereUniqueInput, 'id'>;

    @Field(() => MissedLogoutTicketCreateWithoutAuditLogsInput, {nullable:false})
    @Type(() => MissedLogoutTicketCreateWithoutAuditLogsInput)
    create!: MissedLogoutTicketCreateWithoutAuditLogsInput;
}
