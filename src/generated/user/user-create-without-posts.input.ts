import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateroleInput } from './user-createrole.input';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';
import { MissedLogoutTicketCreateNestedManyWithoutCreatedByInput } from '../missed-logout-ticket/missed-logout-ticket-create-nested-many-without-created-by.input';
import { AuditLogCreateNestedManyWithoutUserInput } from '../audit-log/audit-log-create-nested-many-without-user.input';
import { DepartmentCreateNestedOneWithoutProfilesInput } from '../department/department-create-nested-one-without-profiles.input';

@InputType()
export class UserCreateWithoutPostsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    hashedPassword!: string;

    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateroleInput, {nullable:true})
    role?: UserCreateroleInput;

    @Field(() => ProfileCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutUserInput;

    @Field(() => MissedLogoutTicketCreateNestedManyWithoutCreatedByInput, {nullable:true})
    MissedLogoutTicket?: MissedLogoutTicketCreateNestedManyWithoutCreatedByInput;

    @Field(() => AuditLogCreateNestedManyWithoutUserInput, {nullable:true})
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;

    @Field(() => DepartmentCreateNestedOneWithoutProfilesInput, {nullable:true})
    department?: DepartmentCreateNestedOneWithoutProfilesInput;
}
