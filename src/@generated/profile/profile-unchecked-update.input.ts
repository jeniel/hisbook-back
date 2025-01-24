import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TicketTransactionUncheckedUpdateManyWithoutCreatedByProfileNestedInput } from '../ticket-transaction/ticket-transaction-unchecked-update-many-without-created-by-profile-nested.input';
import { TicketTransactionUncheckedUpdateManyWithoutAssignedToProfileNestedInput } from '../ticket-transaction/ticket-transaction-unchecked-update-many-without-assigned-to-profile-nested.input';
import { TicketTransactionUncheckedUpdateManyWithoutAssignedByProfileNestedInput } from '../ticket-transaction/ticket-transaction-unchecked-update-many-without-assigned-by-profile-nested.input';
import { CommentUncheckedUpdateManyWithoutProfileNestedInput } from '../comment/comment-unchecked-update-many-without-profile-nested.input';

@InputType()
export class ProfileUncheckedUpdateInput {

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

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    departmentId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    createdBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updatedBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => TicketTransactionUncheckedUpdateManyWithoutCreatedByProfileNestedInput, {nullable:true})
    ticketCreatedBy?: TicketTransactionUncheckedUpdateManyWithoutCreatedByProfileNestedInput;

    @Field(() => TicketTransactionUncheckedUpdateManyWithoutAssignedToProfileNestedInput, {nullable:true})
    ticketAssignedTo?: TicketTransactionUncheckedUpdateManyWithoutAssignedToProfileNestedInput;

    @Field(() => TicketTransactionUncheckedUpdateManyWithoutAssignedByProfileNestedInput, {nullable:true})
    ticketAssignedBy?: TicketTransactionUncheckedUpdateManyWithoutAssignedByProfileNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutProfileNestedInput, {nullable:true})
    comment?: CommentUncheckedUpdateManyWithoutProfileNestedInput;
}
