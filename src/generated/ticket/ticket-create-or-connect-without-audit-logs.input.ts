import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketCreateWithoutAuditLogsInput } from './ticket-create-without-audit-logs.input';

@InputType()
export class TicketCreateOrConnectWithoutAuditLogsInput {

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: Prisma.AtLeast<TicketWhereUniqueInput, 'id'>;

    @Field(() => TicketCreateWithoutAuditLogsInput, {nullable:false})
    @Type(() => TicketCreateWithoutAuditLogsInput)
    create!: TicketCreateWithoutAuditLogsInput;
}
