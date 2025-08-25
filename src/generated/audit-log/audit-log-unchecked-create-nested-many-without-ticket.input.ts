import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuditLogCreateWithoutTicketInput } from './audit-log-create-without-ticket.input';
import { Type } from 'class-transformer';
import { AuditLogCreateOrConnectWithoutTicketInput } from './audit-log-create-or-connect-without-ticket.input';
import { AuditLogCreateManyTicketInputEnvelope } from './audit-log-create-many-ticket-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInput } from './audit-log-where-unique.input';

@InputType()
export class AuditLogUncheckedCreateNestedManyWithoutTicketInput {

    @Field(() => [AuditLogCreateWithoutTicketInput], {nullable:true})
    @Type(() => AuditLogCreateWithoutTicketInput)
    create?: Array<AuditLogCreateWithoutTicketInput>;

    @Field(() => [AuditLogCreateOrConnectWithoutTicketInput], {nullable:true})
    @Type(() => AuditLogCreateOrConnectWithoutTicketInput)
    connectOrCreate?: Array<AuditLogCreateOrConnectWithoutTicketInput>;

    @Field(() => AuditLogCreateManyTicketInputEnvelope, {nullable:true})
    @Type(() => AuditLogCreateManyTicketInputEnvelope)
    createMany?: AuditLogCreateManyTicketInputEnvelope;

    @Field(() => [AuditLogWhereUniqueInput], {nullable:true})
    @Type(() => AuditLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
}
