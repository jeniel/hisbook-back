import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumTicketStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-ticket-status-field-update-operations.input';
import { NullableEnumTicketPriorityFieldUpdateOperationsInput } from '../prisma/nullable-enum-ticket-priority-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CommentUpdateManyWithoutTicketNestedInput } from '../comment/comment-update-many-without-ticket-nested.input';
import { ProfileUpdateOneWithoutTicketCreatedByNestedInput } from '../profile/profile-update-one-without-ticket-created-by-nested.input';
import { ProfileUpdateOneWithoutTicketAssignedToNestedInput } from '../profile/profile-update-one-without-ticket-assigned-to-nested.input';
import { DepartmentUpdateOneWithoutTicketsFromNestedInput } from '../department/department-update-one-without-tickets-from-nested.input';
import { TicketCategoryUpdateOneWithoutTicketTransactionNestedInput } from '../ticket-category/ticket-category-update-one-without-ticket-transaction-nested.input';

@InputType()
export class TicketTransactionUpdateWithoutToDepartmentInput {

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

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    createdBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updatedBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CommentUpdateManyWithoutTicketNestedInput, {nullable:true})
    comment?: CommentUpdateManyWithoutTicketNestedInput;

    @Field(() => ProfileUpdateOneWithoutTicketCreatedByNestedInput, {nullable:true})
    createdByProfile?: ProfileUpdateOneWithoutTicketCreatedByNestedInput;

    @Field(() => ProfileUpdateOneWithoutTicketAssignedToNestedInput, {nullable:true})
    assignedToProfile?: ProfileUpdateOneWithoutTicketAssignedToNestedInput;

    @Field(() => DepartmentUpdateOneWithoutTicketsFromNestedInput, {nullable:true})
    fromDepartment?: DepartmentUpdateOneWithoutTicketsFromNestedInput;

    @Field(() => TicketCategoryUpdateOneWithoutTicketTransactionNestedInput, {nullable:true})
    ticketCategory?: TicketCategoryUpdateOneWithoutTicketTransactionNestedInput;
}
