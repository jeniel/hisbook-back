import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInput } from './audit-log-where-unique.input';
import { Type } from 'class-transformer';
import { AuditLogCreateWithoutUserInput } from './audit-log-create-without-user.input';

@InputType()
export class AuditLogCreateOrConnectWithoutUserInput {

    @Field(() => AuditLogWhereUniqueInput, {nullable:false})
    @Type(() => AuditLogWhereUniqueInput)
    where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;

    @Field(() => AuditLogCreateWithoutUserInput, {nullable:false})
    @Type(() => AuditLogCreateWithoutUserInput)
    create!: AuditLogCreateWithoutUserInput;
}
