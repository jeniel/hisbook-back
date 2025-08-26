import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateroleInput } from './user-updaterole.input';
import { ProfileUpdateOneWithoutUserNestedInput } from '../profile/profile-update-one-without-user-nested.input';
import { PostsUpdateManyWithoutUserNestedInput } from '../posts/posts-update-many-without-user-nested.input';
import { AuditLogUpdateManyWithoutUserNestedInput } from '../audit-log/audit-log-update-many-without-user-nested.input';
import { DepartmentUpdateOneWithoutProfilesNestedInput } from '../department/department-update-one-without-profiles-nested.input';

@InputType()
export class UserUpdateWithoutMissedLogoutTicketInput {

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

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateroleInput, {nullable:true})
    role?: UserUpdateroleInput;

    @Field(() => ProfileUpdateOneWithoutUserNestedInput, {nullable:true})
    profile?: ProfileUpdateOneWithoutUserNestedInput;

    @Field(() => PostsUpdateManyWithoutUserNestedInput, {nullable:true})
    posts?: PostsUpdateManyWithoutUserNestedInput;

    @Field(() => AuditLogUpdateManyWithoutUserNestedInput, {nullable:true})
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;

    @Field(() => DepartmentUpdateOneWithoutProfilesNestedInput, {nullable:true})
    department?: DepartmentUpdateOneWithoutProfilesNestedInput;
}
