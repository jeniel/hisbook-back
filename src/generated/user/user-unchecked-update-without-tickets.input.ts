import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateroleInput } from './user-updaterole.input';
import { ProfileUncheckedUpdateOneWithoutUserNestedInput } from '../profile/profile-unchecked-update-one-without-user-nested.input';
import { PostsUncheckedUpdateManyWithoutUserNestedInput } from '../posts/posts-unchecked-update-many-without-user-nested.input';
import { AuditLogUncheckedUpdateManyWithoutUserNestedInput } from '../audit-log/audit-log-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutTicketsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    hashedPassword?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateroleInput, {nullable:true})
    role?: UserUpdateroleInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    departmentId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ProfileUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => PostsUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    posts?: PostsUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => AuditLogUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
}
