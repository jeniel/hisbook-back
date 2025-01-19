import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketStatus } from '../prisma/ticket-status.enum';
import { TicketPriority } from '../prisma/ticket-priority.enum';
import { ProfileCreateNestedOneWithoutTicketTransactionInput } from '../profile/profile-create-nested-one-without-ticket-transaction.input';
import { CommentCreateNestedManyWithoutTicketInput } from '../comment/comment-create-nested-many-without-ticket.input';

@InputType()
export class TicketTransactionCreateWithoutAgentTransactionInput {

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

    @Field(() => String, {nullable:true})
    departmentFrom?: string;

    @Field(() => String, {nullable:true})
    departmentTo?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => ProfileCreateNestedOneWithoutTicketTransactionInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutTicketTransactionInput;

    @Field(() => CommentCreateNestedManyWithoutTicketInput, {nullable:true})
    comment?: CommentCreateNestedManyWithoutTicketInput;
}
