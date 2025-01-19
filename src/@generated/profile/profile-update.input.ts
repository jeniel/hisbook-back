import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DepartmentUpdateOneWithoutProfileNestedInput } from '../department/department-update-one-without-profile-nested.input';
import { UserUpdateOneWithoutProfileNestedInput } from '../user/user-update-one-without-profile-nested.input';
import { TicketTransactionUpdateManyWithoutCreatedByProfileNestedInput } from '../ticket-transaction/ticket-transaction-update-many-without-created-by-profile-nested.input';
import { TicketTransactionUpdateManyWithoutAssignedToProfileNestedInput } from '../ticket-transaction/ticket-transaction-update-many-without-assigned-to-profile-nested.input';
import { CommentUpdateManyWithoutProfileNestedInput } from '../comment/comment-update-many-without-profile-nested.input';

@InputType()
export class ProfileUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    middleName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    designation?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employeeID?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    dateHired?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    birthDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    address?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    contact?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    createdBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updatedBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DepartmentUpdateOneWithoutProfileNestedInput, {nullable:true})
    department?: DepartmentUpdateOneWithoutProfileNestedInput;

    @Field(() => UserUpdateOneWithoutProfileNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutProfileNestedInput;

    @Field(() => TicketTransactionUpdateManyWithoutCreatedByProfileNestedInput, {nullable:true})
    ticketCreatedBy?: TicketTransactionUpdateManyWithoutCreatedByProfileNestedInput;

    @Field(() => TicketTransactionUpdateManyWithoutAssignedToProfileNestedInput, {nullable:true})
    ticketAssignedTo?: TicketTransactionUpdateManyWithoutAssignedToProfileNestedInput;

    @Field(() => CommentUpdateManyWithoutProfileNestedInput, {nullable:true})
    comment?: CommentUpdateManyWithoutProfileNestedInput;
}
