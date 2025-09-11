import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutAuditLogsInput } from './ticket-create-without-audit-logs.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutAuditLogsInput } from './ticket-create-or-connect-without-audit-logs.input';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';

@InputType()
export class TicketCreateNestedOneWithoutAuditLogsInput {

    @Field(() => TicketCreateWithoutAuditLogsInput, {nullable:true})
    @Type(() => TicketCreateWithoutAuditLogsInput)
    create?: TicketCreateWithoutAuditLogsInput;

    @Field(() => TicketCreateOrConnectWithoutAuditLogsInput, {nullable:true})
    @Type(() => TicketCreateOrConnectWithoutAuditLogsInput)
    connectOrCreate?: TicketCreateOrConnectWithoutAuditLogsInput;

    @Field(() => TicketWhereUniqueInput, {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    connect?: Prisma.AtLeast<TicketWhereUniqueInput, 'id'>;
}
