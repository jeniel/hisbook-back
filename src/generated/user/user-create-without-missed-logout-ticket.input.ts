import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateroleInput } from './user-createrole.input';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';
import { PostsCreateNestedManyWithoutUserInput } from '../posts/posts-create-nested-many-without-user.input';
import { AuditLogCreateNestedManyWithoutUserInput } from '../audit-log/audit-log-create-nested-many-without-user.input';
import { DepartmentCreateNestedOneWithoutProfilesInput } from '../department/department-create-nested-one-without-profiles.input';

@InputType()
export class UserCreateWithoutMissedLogoutTicketInput {

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

    @Field(() => ProfileCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutUserInput;

    @Field(() => PostsCreateNestedManyWithoutUserInput, {nullable:true})
    posts?: PostsCreateNestedManyWithoutUserInput;

    @Field(() => AuditLogCreateNestedManyWithoutUserInput, {nullable:true})
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;

    @Field(() => DepartmentCreateNestedOneWithoutProfilesInput, {nullable:true})
    department?: DepartmentCreateNestedOneWithoutProfilesInput;
}
