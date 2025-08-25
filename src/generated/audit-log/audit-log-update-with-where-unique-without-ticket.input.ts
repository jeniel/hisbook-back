import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInput } from './audit-log-where-unique.input';
import { Type } from 'class-transformer';
import { AuditLogUpdateWithoutTicketInput } from './audit-log-update-without-ticket.input';

@InputType()
export class AuditLogUpdateWithWhereUniqueWithoutTicketInput {

    @Field(() => AuditLogWhereUniqueInput, {nullable:false})
    @Type(() => AuditLogWhereUniqueInput)
    where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;

    @Field(() => AuditLogUpdateWithoutTicketInput, {nullable:false})
    @Type(() => AuditLogUpdateWithoutTicketInput)
    data!: AuditLogUpdateWithoutTicketInput;
}
