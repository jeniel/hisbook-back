import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAuditLogsInput } from './user-update-without-audit-logs.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAuditLogsInput } from './user-create-without-audit-logs.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAuditLogsInput {

    @Field(() => UserUpdateWithoutAuditLogsInput, {nullable:false})
    @Type(() => UserUpdateWithoutAuditLogsInput)
    update!: UserUpdateWithoutAuditLogsInput;

    @Field(() => UserCreateWithoutAuditLogsInput, {nullable:false})
    @Type(() => UserCreateWithoutAuditLogsInput)
    create!: UserCreateWithoutAuditLogsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
