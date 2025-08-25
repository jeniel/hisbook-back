import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuditLogCreateWithoutTicketInput } from './audit-log-create-without-ticket.input';
import { Type } from 'class-transformer';
import { AuditLogCreateOrConnectWithoutTicketInput } from './audit-log-create-or-connect-without-ticket.input';
import { AuditLogUpsertWithWhereUniqueWithoutTicketInput } from './audit-log-upsert-with-where-unique-without-ticket.input';
import { AuditLogCreateManyTicketInputEnvelope } from './audit-log-create-many-ticket-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInput } from './audit-log-where-unique.input';
import { AuditLogUpdateWithWhereUniqueWithoutTicketInput } from './audit-log-update-with-where-unique-without-ticket.input';
import { AuditLogUpdateManyWithWhereWithoutTicketInput } from './audit-log-update-many-with-where-without-ticket.input';
import { AuditLogScalarWhereInput } from './audit-log-scalar-where.input';

@InputType()
export class AuditLogUpdateManyWithoutTicketNestedInput {

    @Field(() => [AuditLogCreateWithoutTicketInput], {nullable:true})
    @Type(() => AuditLogCreateWithoutTicketInput)
    create?: Array<AuditLogCreateWithoutTicketInput>;

    @Field(() => [AuditLogCreateOrConnectWithoutTicketInput], {nullable:true})
    @Type(() => AuditLogCreateOrConnectWithoutTicketInput)
    connectOrCreate?: Array<AuditLogCreateOrConnectWithoutTicketInput>;

    @Field(() => [AuditLogUpsertWithWhereUniqueWithoutTicketInput], {nullable:true})
    @Type(() => AuditLogUpsertWithWhereUniqueWithoutTicketInput)
    upsert?: Array<AuditLogUpsertWithWhereUniqueWithoutTicketInput>;

    @Field(() => AuditLogCreateManyTicketInputEnvelope, {nullable:true})
    @Type(() => AuditLogCreateManyTicketInputEnvelope)
    createMany?: AuditLogCreateManyTicketInputEnvelope;

    @Field(() => [AuditLogWhereUniqueInput], {nullable:true})
    @Type(() => AuditLogWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;

    @Field(() => [AuditLogWhereUniqueInput], {nullable:true})
    @Type(() => AuditLogWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;

    @Field(() => [AuditLogWhereUniqueInput], {nullable:true})
    @Type(() => AuditLogWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;

    @Field(() => [AuditLogWhereUniqueInput], {nullable:true})
    @Type(() => AuditLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;

    @Field(() => [AuditLogUpdateWithWhereUniqueWithoutTicketInput], {nullable:true})
    @Type(() => AuditLogUpdateWithWhereUniqueWithoutTicketInput)
    update?: Array<AuditLogUpdateWithWhereUniqueWithoutTicketInput>;

    @Field(() => [AuditLogUpdateManyWithWhereWithoutTicketInput], {nullable:true})
    @Type(() => AuditLogUpdateManyWithWhereWithoutTicketInput)
    updateMany?: Array<AuditLogUpdateManyWithWhereWithoutTicketInput>;

    @Field(() => [AuditLogScalarWhereInput], {nullable:true})
    @Type(() => AuditLogScalarWhereInput)
    deleteMany?: Array<AuditLogScalarWhereInput>;
}
