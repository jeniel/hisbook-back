import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateroleInput } from './user-createrole.input';
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input';
import { PostsUncheckedCreateNestedManyWithoutUserInput } from '../posts/posts-unchecked-create-nested-many-without-user.input';
import { MissedLogoutTicketUncheckedCreateNestedManyWithoutCreatedByInput } from '../missed-logout-ticket/missed-logout-ticket-unchecked-create-nested-many-without-created-by.input';

@InputType()
export class UserUncheckedCreateWithoutAuditLogsInput {

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

    @Field(() => String, {nullable:true})
    departmentId?: string;

    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => PostsUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    posts?: PostsUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => MissedLogoutTicketUncheckedCreateNestedManyWithoutCreatedByInput, {nullable:true})
    MissedLogoutTicket?: MissedLogoutTicketUncheckedCreateNestedManyWithoutCreatedByInput;
}
