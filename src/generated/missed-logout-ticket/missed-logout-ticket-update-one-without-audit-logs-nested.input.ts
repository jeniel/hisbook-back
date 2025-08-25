import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissedLogoutTicketCreateWithoutAuditLogsInput } from './missed-logout-ticket-create-without-audit-logs.input';
import { Type } from 'class-transformer';
import { MissedLogoutTicketCreateOrConnectWithoutAuditLogsInput } from './missed-logout-ticket-create-or-connect-without-audit-logs.input';
import { MissedLogoutTicketUpsertWithoutAuditLogsInput } from './missed-logout-ticket-upsert-without-audit-logs.input';
import { MissedLogoutTicketWhereInput } from './missed-logout-ticket-where.input';
import { Prisma } from '@prisma/client';
import { MissedLogoutTicketWhereUniqueInput } from './missed-logout-ticket-where-unique.input';
import { MissedLogoutTicketUpdateToOneWithWhereWithoutAuditLogsInput } from './missed-logout-ticket-update-to-one-with-where-without-audit-logs.input';

@InputType()
export class MissedLogoutTicketUpdateOneWithoutAuditLogsNestedInput {

    @Field(() => MissedLogoutTicketCreateWithoutAuditLogsInput, {nullable:true})
    @Type(() => MissedLogoutTicketCreateWithoutAuditLogsInput)
    create?: MissedLogoutTicketCreateWithoutAuditLogsInput;

    @Field(() => MissedLogoutTicketCreateOrConnectWithoutAuditLogsInput, {nullable:true})
    @Type(() => MissedLogoutTicketCreateOrConnectWithoutAuditLogsInput)
    connectOrCreate?: MissedLogoutTicketCreateOrConnectWithoutAuditLogsInput;

    @Field(() => MissedLogoutTicketUpsertWithoutAuditLogsInput, {nullable:true})
    @Type(() => MissedLogoutTicketUpsertWithoutAuditLogsInput)
    upsert?: MissedLogoutTicketUpsertWithoutAuditLogsInput;

    @Field(() => MissedLogoutTicketWhereInput, {nullable:true})
    @Type(() => MissedLogoutTicketWhereInput)
    disconnect?: MissedLogoutTicketWhereInput;

    @Field(() => MissedLogoutTicketWhereInput, {nullable:true})
    @Type(() => MissedLogoutTicketWhereInput)
    delete?: MissedLogoutTicketWhereInput;

    @Field(() => MissedLogoutTicketWhereUniqueInput, {nullable:true})
    @Type(() => MissedLogoutTicketWhereUniqueInput)
    connect?: Prisma.AtLeast<MissedLogoutTicketWhereUniqueInput, 'id'>;

    @Field(() => MissedLogoutTicketUpdateToOneWithWhereWithoutAuditLogsInput, {nullable:true})
    @Type(() => MissedLogoutTicketUpdateToOneWithWhereWithoutAuditLogsInput)
    update?: MissedLogoutTicketUpdateToOneWithWhereWithoutAuditLogsInput;
}
