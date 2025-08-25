import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAuditLogsInput } from './user-create-without-audit-logs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAuditLogsInput } from './user-create-or-connect-without-audit-logs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAuditLogsInput {

    @Field(() => UserCreateWithoutAuditLogsInput, {nullable:true})
    @Type(() => UserCreateWithoutAuditLogsInput)
    create?: UserCreateWithoutAuditLogsInput;

    @Field(() => UserCreateOrConnectWithoutAuditLogsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAuditLogsInput)
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;
}
