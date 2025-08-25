import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissedLogoutTicketCreateWithoutAuditLogsInput } from './missed-logout-ticket-create-without-audit-logs.input';
import { Type } from 'class-transformer';
import { MissedLogoutTicketCreateOrConnectWithoutAuditLogsInput } from './missed-logout-ticket-create-or-connect-without-audit-logs.input';
import { Prisma } from '@prisma/client';
import { MissedLogoutTicketWhereUniqueInput } from './missed-logout-ticket-where-unique.input';

@InputType()
export class MissedLogoutTicketCreateNestedOneWithoutAuditLogsInput {

    @Field(() => MissedLogoutTicketCreateWithoutAuditLogsInput, {nullable:true})
    @Type(() => MissedLogoutTicketCreateWithoutAuditLogsInput)
    create?: MissedLogoutTicketCreateWithoutAuditLogsInput;

    @Field(() => MissedLogoutTicketCreateOrConnectWithoutAuditLogsInput, {nullable:true})
    @Type(() => MissedLogoutTicketCreateOrConnectWithoutAuditLogsInput)
    connectOrCreate?: MissedLogoutTicketCreateOrConnectWithoutAuditLogsInput;

    @Field(() => MissedLogoutTicketWhereUniqueInput, {nullable:true})
    @Type(() => MissedLogoutTicketWhereUniqueInput)
    connect?: Prisma.AtLeast<MissedLogoutTicketWhereUniqueInput, 'id'>;
}
