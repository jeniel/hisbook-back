import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAuditLogsInput } from './user-create-without-audit-logs.input';

@InputType()
export class UserCreateOrConnectWithoutAuditLogsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutAuditLogsInput, {nullable:false})
    @Type(() => UserCreateWithoutAuditLogsInput)
    create!: UserCreateWithoutAuditLogsInput;
}
