import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketUpdateWithoutAuditLogsInput } from './ticket-update-without-audit-logs.input';
import { Type } from 'class-transformer';
import { TicketCreateWithoutAuditLogsInput } from './ticket-create-without-audit-logs.input';
import { TicketWhereInput } from './ticket-where.input';

@InputType()
export class TicketUpsertWithoutAuditLogsInput {

    @Field(() => TicketUpdateWithoutAuditLogsInput, {nullable:false})
    @Type(() => TicketUpdateWithoutAuditLogsInput)
    update!: TicketUpdateWithoutAuditLogsInput;

    @Field(() => TicketCreateWithoutAuditLogsInput, {nullable:false})
    @Type(() => TicketCreateWithoutAuditLogsInput)
    create!: TicketCreateWithoutAuditLogsInput;

    @Field(() => TicketWhereInput, {nullable:true})
    @Type(() => TicketWhereInput)
    where?: TicketWhereInput;
}
