import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateroleInput } from './user-createrole.input';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';
import { PostsCreateNestedManyWithoutUserInput } from '../posts/posts-create-nested-many-without-user.input';
import { TicketCreateNestedManyWithoutCreatedByInput } from '../ticket/ticket-create-nested-many-without-created-by.input';
import { DepartmentCreateNestedOneWithoutUsersInput } from '../department/department-create-nested-one-without-users.input';

@InputType()
export class UserCreateWithoutAuditLogsInput {

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

    @Field(() => PostsCreateNestedManyWithoutUserInput, {nullable:true})
    posts?: PostsCreateNestedManyWithoutUserInput;

    @Field(() => TicketCreateNestedManyWithoutCreatedByInput, {nullable:true})
    tickets?: TicketCreateNestedManyWithoutCreatedByInput;

    @Field(() => DepartmentCreateNestedOneWithoutUsersInput, {nullable:true})
    department?: DepartmentCreateNestedOneWithoutUsersInput;
}
