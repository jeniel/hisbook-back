import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAuditLogsInput } from './user-create-without-audit-logs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAuditLogsInput } from './user-create-or-connect-without-audit-logs.input';
import { UserUpsertWithoutAuditLogsInput } from './user-upsert-without-audit-logs.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAuditLogsInput } from './user-update-to-one-with-where-without-audit-logs.input';

@InputType()
export class UserUpdateOneWithoutAuditLogsNestedInput {

    @Field(() => UserCreateWithoutAuditLogsInput, {nullable:true})
    @Type(() => UserCreateWithoutAuditLogsInput)
    create?: UserCreateWithoutAuditLogsInput;

    @Field(() => UserCreateOrConnectWithoutAuditLogsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAuditLogsInput)
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput;

    @Field(() => UserUpsertWithoutAuditLogsInput, {nullable:true})
    @Type(() => UserUpsertWithoutAuditLogsInput)
    upsert?: UserUpsertWithoutAuditLogsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAuditLogsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAuditLogsInput)
    update?: UserUpdateToOneWithWhereWithoutAuditLogsInput;
}
