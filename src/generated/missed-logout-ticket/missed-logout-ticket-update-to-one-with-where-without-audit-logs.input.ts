import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissedLogoutTicketWhereInput } from './missed-logout-ticket-where.input';
import { Type } from 'class-transformer';
import { MissedLogoutTicketUpdateWithoutAuditLogsInput } from './missed-logout-ticket-update-without-audit-logs.input';

@InputType()
export class MissedLogoutTicketUpdateToOneWithWhereWithoutAuditLogsInput {

    @Field(() => MissedLogoutTicketWhereInput, {nullable:true})
    @Type(() => MissedLogoutTicketWhereInput)
    where?: MissedLogoutTicketWhereInput;

    @Field(() => MissedLogoutTicketUpdateWithoutAuditLogsInput, {nullable:false})
    @Type(() => MissedLogoutTicketUpdateWithoutAuditLogsInput)
    data!: MissedLogoutTicketUpdateWithoutAuditLogsInput;
}
