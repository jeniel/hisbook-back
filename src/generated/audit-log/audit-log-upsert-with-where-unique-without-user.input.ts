import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInput } from './audit-log-where-unique.input';
import { Type } from 'class-transformer';
import { AuditLogUpdateWithoutUserInput } from './audit-log-update-without-user.input';
import { AuditLogCreateWithoutUserInput } from './audit-log-create-without-user.input';

@InputType()
export class AuditLogUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => AuditLogWhereUniqueInput, {nullable:false})
    @Type(() => AuditLogWhereUniqueInput)
    where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;

    @Field(() => AuditLogUpdateWithoutUserInput, {nullable:false})
    @Type(() => AuditLogUpdateWithoutUserInput)
    update!: AuditLogUpdateWithoutUserInput;

    @Field(() => AuditLogCreateWithoutUserInput, {nullable:false})
    @Type(() => AuditLogCreateWithoutUserInput)
    create!: AuditLogCreateWithoutUserInput;
}
