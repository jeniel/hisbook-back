import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuditLogUpdateInput } from './audit-log-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInput } from './audit-log-where-unique.input';

@ArgsType()
export class UpdateOneAuditLogArgs {

    @Field(() => AuditLogUpdateInput, {nullable:false})
    @Type(() => AuditLogUpdateInput)
    data!: AuditLogUpdateInput;

    @Field(() => AuditLogWhereUniqueInput, {nullable:false})
    @Type(() => AuditLogWhereUniqueInput)
    where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;
}
