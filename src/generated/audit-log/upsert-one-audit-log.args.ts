import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInput } from './audit-log-where-unique.input';
import { Type } from 'class-transformer';
import { AuditLogCreateInput } from './audit-log-create.input';
import { AuditLogUpdateInput } from './audit-log-update.input';

@ArgsType()
export class UpsertOneAuditLogArgs {

    @Field(() => AuditLogWhereUniqueInput, {nullable:false})
    @Type(() => AuditLogWhereUniqueInput)
    where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;

    @Field(() => AuditLogCreateInput, {nullable:false})
    @Type(() => AuditLogCreateInput)
    create!: AuditLogCreateInput;

    @Field(() => AuditLogUpdateInput, {nullable:false})
    @Type(() => AuditLogUpdateInput)
    update!: AuditLogUpdateInput;
}
