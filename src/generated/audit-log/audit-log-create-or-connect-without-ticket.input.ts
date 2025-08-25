import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInput } from './audit-log-where-unique.input';
import { Type } from 'class-transformer';
import { AuditLogCreateWithoutTicketInput } from './audit-log-create-without-ticket.input';

@InputType()
export class AuditLogCreateOrConnectWithoutTicketInput {

    @Field(() => AuditLogWhereUniqueInput, {nullable:false})
    @Type(() => AuditLogWhereUniqueInput)
    where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;

    @Field(() => AuditLogCreateWithoutTicketInput, {nullable:false})
    @Type(() => AuditLogCreateWithoutTicketInput)
    create!: AuditLogCreateWithoutTicketInput;
}
