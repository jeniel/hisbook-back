import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutAuditLogsInput } from './ticket-create-without-audit-logs.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutAuditLogsInput } from './ticket-create-or-connect-without-audit-logs.input';
import { TicketUpsertWithoutAuditLogsInput } from './ticket-upsert-without-audit-logs.input';
import { TicketWhereInput } from './ticket-where.input';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { TicketUpdateToOneWithWhereWithoutAuditLogsInput } from './ticket-update-to-one-with-where-without-audit-logs.input';

@InputType()
export class TicketUpdateOneWithoutAuditLogsNestedInput {

    @Field(() => TicketCreateWithoutAuditLogsInput, {nullable:true})
    @Type(() => TicketCreateWithoutAuditLogsInput)
    create?: TicketCreateWithoutAuditLogsInput;

    @Field(() => TicketCreateOrConnectWithoutAuditLogsInput, {nullable:true})
    @Type(() => TicketCreateOrConnectWithoutAuditLogsInput)
    connectOrCreate?: TicketCreateOrConnectWithoutAuditLogsInput;

    @Field(() => TicketUpsertWithoutAuditLogsInput, {nullable:true})
    @Type(() => TicketUpsertWithoutAuditLogsInput)
    upsert?: TicketUpsertWithoutAuditLogsInput;

    @Field(() => TicketWhereInput, {nullable:true})
    @Type(() => TicketWhereInput)
    disconnect?: TicketWhereInput;

    @Field(() => TicketWhereInput, {nullable:true})
    @Type(() => TicketWhereInput)
    delete?: TicketWhereInput;

    @Field(() => TicketWhereUniqueInput, {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    connect?: Prisma.AtLeast<TicketWhereUniqueInput, 'id'>;

    @Field(() => TicketUpdateToOneWithWhereWithoutAuditLogsInput, {nullable:true})
    @Type(() => TicketUpdateToOneWithWhereWithoutAuditLogsInput)
    update?: TicketUpdateToOneWithWhereWithoutAuditLogsInput;
}
