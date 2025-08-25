import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissedLogoutTicketUpdateWithoutAuditLogsInput } from './missed-logout-ticket-update-without-audit-logs.input';
import { Type } from 'class-transformer';
import { MissedLogoutTicketCreateWithoutAuditLogsInput } from './missed-logout-ticket-create-without-audit-logs.input';
import { MissedLogoutTicketWhereInput } from './missed-logout-ticket-where.input';

@InputType()
export class MissedLogoutTicketUpsertWithoutAuditLogsInput {

    @Field(() => MissedLogoutTicketUpdateWithoutAuditLogsInput, {nullable:false})
    @Type(() => MissedLogoutTicketUpdateWithoutAuditLogsInput)
    update!: MissedLogoutTicketUpdateWithoutAuditLogsInput;

    @Field(() => MissedLogoutTicketCreateWithoutAuditLogsInput, {nullable:false})
    @Type(() => MissedLogoutTicketCreateWithoutAuditLogsInput)
    create!: MissedLogoutTicketCreateWithoutAuditLogsInput;

    @Field(() => MissedLogoutTicketWhereInput, {nullable:true})
    @Type(() => MissedLogoutTicketWhereInput)
    where?: MissedLogoutTicketWhereInput;
}
