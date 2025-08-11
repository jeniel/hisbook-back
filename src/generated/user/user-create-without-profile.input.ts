import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateroleInput } from './user-createrole.input';
import { PostsCreateNestedManyWithoutUserInput } from '../posts/posts-create-nested-many-without-user.input';
import { DepartmentCreateNestedOneWithoutUsersInput } from '../department/department-create-nested-one-without-users.input';

@InputType()
export class UserCreateWithoutProfileInput {

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

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Boolean, {nullable:true})
    isApprove?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => String, {nullable:true})
    tenantId?: string;

    @Field(() => UserCreateroleInput, {nullable:true})
    role?: UserCreateroleInput;

    @Field(() => PostsCreateNestedManyWithoutUserInput, {nullable:true})
    posts?: PostsCreateNestedManyWithoutUserInput;

    @Field(() => DepartmentCreateNestedOneWithoutUsersInput, {nullable:true})
    department?: DepartmentCreateNestedOneWithoutUsersInput;
}
