import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumTicketStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-ticket-status-field-update-operations.input';
import { NullableEnumTicketPriorityFieldUpdateOperationsInput } from '../prisma/nullable-enum-ticket-priority-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProfileUpdateOneWithoutTicketTransactionNestedInput } from '../profile/profile-update-one-without-ticket-transaction-nested.input';
import { CommentUpdateManyWithoutTicketNestedInput } from '../comment/comment-update-many-without-ticket-nested.input';

@InputType()
export class TicketTransactionUpdateWithoutAgentTransactionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumTicketStatusFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumTicketStatusFieldUpdateOperationsInput;

    @Field(() => NullableEnumTicketPriorityFieldUpdateOperationsInput, {nullable:true})
    priority?: NullableEnumTicketPriorityFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    type?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    category?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subCategory?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    departmentFrom?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    departmentTo?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    createdBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updatedBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ProfileUpdateOneWithoutTicketTransactionNestedInput, {nullable:true})
    profile?: ProfileUpdateOneWithoutTicketTransactionNestedInput;

    @Field(() => CommentUpdateManyWithoutTicketNestedInput, {nullable:true})
    comment?: CommentUpdateManyWithoutTicketNestedInput;
}
