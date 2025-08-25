import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateroleInput } from './user-createrole.input';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { MissedLogoutTicketUncheckedCreateNestedManyWithoutCreatedByInput } from '../missed-logout-ticket/missed-logout-ticket-unchecked-create-nested-many-without-created-by.input';
import { AuditLogUncheckedCreateNestedManyWithoutUserInput } from '../audit-log/audit-log-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutPostsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;

    @Field(() => UserCreateroleInput, {nullable:true})
    role?: UserCreateroleInput;

    @Field(() => String, {nullable:true})
    departmentId?: string;

    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => MissedLogoutTicketUncheckedCreateNestedManyWithoutCreatedByInput, {nullable:true})
    MissedLogoutTicket?: MissedLogoutTicketUncheckedCreateNestedManyWithoutCreatedByInput;

    @Field(() => AuditLogUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
}
