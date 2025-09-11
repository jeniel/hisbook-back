import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketWhereInput } from './ticket-where.input';
import { Type } from 'class-transformer';
import { TicketUpdateWithoutAuditLogsInput } from './ticket-update-without-audit-logs.input';

@InputType()
export class TicketUpdateToOneWithWhereWithoutAuditLogsInput {

    @Field(() => TicketWhereInput, {nullable:true})
    @Type(() => TicketWhereInput)
    where?: TicketWhereInput;

    @Field(() => TicketUpdateWithoutAuditLogsInput, {nullable:false})
    @Type(() => TicketUpdateWithoutAuditLogsInput)
    data!: TicketUpdateWithoutAuditLogsInput;
}
