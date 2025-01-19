import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketStatus } from '../prisma/ticket-status.enum';
import { TicketPriority } from '../prisma/ticket-priority.enum';

@InputType()
export class TicketTransactionCreateManyFromDepartmentInput {

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
    departmentTo?: string;

    @Field(() => String, {nullable:true})
    ticketCreatedBy?: string;

    @Field(() => String, {nullable:true})
    ticketAssignedTo?: string;

    @Field(() => String, {nullable:true})
    ticketCategoryId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;
}
