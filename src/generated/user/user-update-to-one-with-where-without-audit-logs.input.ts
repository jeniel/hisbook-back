import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAuditLogsInput } from './user-update-without-audit-logs.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAuditLogsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAuditLogsInput, {nullable:false})
    @Type(() => UserUpdateWithoutAuditLogsInput)
    data!: UserUpdateWithoutAuditLogsInput;
}
