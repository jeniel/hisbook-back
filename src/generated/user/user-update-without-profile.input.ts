import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateroleInput } from './user-updaterole.input';
import { PostsUpdateManyWithoutUserNestedInput } from '../posts/posts-update-many-without-user-nested.input';
import { MissedLogoutTicketUpdateManyWithoutCreatedByNestedInput } from '../missed-logout-ticket/missed-logout-ticket-update-many-without-created-by-nested.input';
import { DepartmentUpdateOneWithoutProfilesNestedInput } from '../department/department-update-one-without-profiles-nested.input';

@InputType()
export class UserUpdateWithoutProfileInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    hashedPassword?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateroleInput, {nullable:true})
    role?: UserUpdateroleInput;

    @Field(() => PostsUpdateManyWithoutUserNestedInput, {nullable:true})
    posts?: PostsUpdateManyWithoutUserNestedInput;

    @Field(() => MissedLogoutTicketUpdateManyWithoutCreatedByNestedInput, {nullable:true})
    MissedLogoutTicket?: MissedLogoutTicketUpdateManyWithoutCreatedByNestedInput;

    @Field(() => DepartmentUpdateOneWithoutProfilesNestedInput, {nullable:true})
    department?: DepartmentUpdateOneWithoutProfilesNestedInput;
}
