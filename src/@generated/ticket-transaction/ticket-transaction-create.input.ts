import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketStatus } from '../prisma/ticket-status.enum';
import { TicketPriority } from '../prisma/ticket-priority.enum';
import { ProfileCreateNestedOneWithoutTikcetTransactionInput } from '../profile/profile-create-nested-one-without-tikcet-transaction.input';
import { CommentCreateNestedManyWithoutTicketInput } from '../comment/comment-create-nested-many-without-ticket.input';

@InputType()
export class TicketTransactionCreateInput {

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

    @Field(() => ProfileCreateNestedOneWithoutTikcetTransactionInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutTikcetTransactionInput;

    @Field(() => CommentCreateNestedManyWithoutTicketInput, {nullable:true})
    comment?: CommentCreateNestedManyWithoutTicketInput;
}
