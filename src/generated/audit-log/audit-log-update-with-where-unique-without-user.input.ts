import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInput } from './audit-log-where-unique.input';
import { Type } from 'class-transformer';
import { AuditLogUpdateWithoutUserInput } from './audit-log-update-without-user.input';

@InputType()
export class AuditLogUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => AuditLogWhereUniqueInput, {nullable:false})
    @Type(() => AuditLogWhereUniqueInput)
    where!: Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>;

    @Field(() => AuditLogUpdateWithoutUserInput, {nullable:false})
    @Type(() => AuditLogUpdateWithoutUserInput)
    data!: AuditLogUpdateWithoutUserInput;
}
