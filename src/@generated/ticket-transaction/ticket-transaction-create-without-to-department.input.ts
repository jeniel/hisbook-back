import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketStatus } from '../prisma/ticket-status.enum';
import { TicketPriority } from '../prisma/ticket-priority.enum';
import { CommentCreateNestedManyWithoutTicketInput } from '../comment/comment-create-nested-many-without-ticket.input';
import { ProfileCreateNestedOneWithoutTicketCreatedByInput } from '../profile/profile-create-nested-one-without-ticket-created-by.input';
import { ProfileCreateNestedOneWithoutTicketAssignedToInput } from '../profile/profile-create-nested-one-without-ticket-assigned-to.input';
import { ProfileCreateNestedOneWithoutTicketAssignedByInput } from '../profile/profile-create-nested-one-without-ticket-assigned-by.input';
import { DepartmentCreateNestedOneWithoutTicketsFromInput } from '../department/department-create-nested-one-without-tickets-from.input';
import { TicketCategoryCreateNestedOneWithoutTicketTransactionInput } from '../ticket-category/ticket-category-create-nested-one-without-ticket-transaction.input';

@InputType()
export class TicketTransactionCreateWithoutToDepartmentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    ticketNumber?: string;

    @Field(() => TicketStatus, {nullable:true})
    status?: keyof typeof TicketStatus;

    @Field(() => TicketPriority, {nullable:true})
    priority?: keyof typeof TicketPriority;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => CommentCreateNestedManyWithoutTicketInput, {nullable:true})
    comment?: CommentCreateNestedManyWithoutTicketInput;

    @Field(() => ProfileCreateNestedOneWithoutTicketCreatedByInput, {nullable:true})
    createdByProfile?: ProfileCreateNestedOneWithoutTicketCreatedByInput;

    @Field(() => ProfileCreateNestedOneWithoutTicketAssignedToInput, {nullable:true})
    assignedToProfile?: ProfileCreateNestedOneWithoutTicketAssignedToInput;

    @Field(() => ProfileCreateNestedOneWithoutTicketAssignedByInput, {nullable:true})
    assignedByProfile?: ProfileCreateNestedOneWithoutTicketAssignedByInput;

    @Field(() => DepartmentCreateNestedOneWithoutTicketsFromInput, {nullable:true})
    fromDepartment?: DepartmentCreateNestedOneWithoutTicketsFromInput;

    @Field(() => TicketCategoryCreateNestedOneWithoutTicketTransactionInput, {nullable:true})
    ticketCategory?: TicketCategoryCreateNestedOneWithoutTicketTransactionInput;
}
