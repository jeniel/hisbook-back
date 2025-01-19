import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketStatus } from '../prisma/ticket-status.enum';
import { TicketPriority } from '../prisma/ticket-priority.enum';
import { CommentCreateNestedManyWithoutTicketInput } from '../comment/comment-create-nested-many-without-ticket.input';
import { AgentTransactionCreateNestedManyWithoutTicketInput } from '../agent-transaction/agent-transaction-create-nested-many-without-ticket.input';
import { DepartmentCreateNestedOneWithoutTicketsFromInput } from '../department/department-create-nested-one-without-tickets-from.input';
import { DepartmentCreateNestedOneWithoutTicketsToInput } from '../department/department-create-nested-one-without-tickets-to.input';

@InputType()
export class TicketTransactionCreateWithoutProfileInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => TicketStatus, {nullable:true})
    status?: keyof typeof TicketStatus;

    @Field(() => TicketPriority, {nullable:true})
    priority?: keyof typeof TicketPriority;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => String, {nullable:true})
    subCategory?: string;

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

    @Field(() => AgentTransactionCreateNestedManyWithoutTicketInput, {nullable:true})
    agent?: AgentTransactionCreateNestedManyWithoutTicketInput;

    @Field(() => DepartmentCreateNestedOneWithoutTicketsFromInput, {nullable:true})
    fromDepartment?: DepartmentCreateNestedOneWithoutTicketsFromInput;

    @Field(() => DepartmentCreateNestedOneWithoutTicketsToInput, {nullable:true})
    toDepartment?: DepartmentCreateNestedOneWithoutTicketsToInput;
}
