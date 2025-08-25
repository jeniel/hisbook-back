import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateroleInput } from './user-createrole.input';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { PostsUncheckedCreateNestedManyWithoutUserInput } from '../posts/posts-unchecked-create-nested-many-without-user.input';
import { AuditLogUncheckedCreateNestedManyWithoutUserInput } from '../audit-log/audit-log-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutMissedLogoutTicketInput {

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

    @Field(() => PostsUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    posts?: PostsUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => AuditLogUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
}
