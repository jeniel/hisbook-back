import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TicketTransactionUncheckedCreateNestedManyWithoutCreatedByProfileInput } from '../ticket-transaction/ticket-transaction-unchecked-create-nested-many-without-created-by-profile.input';
import { TicketTransactionUncheckedCreateNestedManyWithoutAssignedToProfileInput } from '../ticket-transaction/ticket-transaction-unchecked-create-nested-many-without-assigned-to-profile.input';
import { TicketTransactionUncheckedCreateNestedManyWithoutAssignedByProfileInput } from '../ticket-transaction/ticket-transaction-unchecked-create-nested-many-without-assigned-by-profile.input';
import { CommentUncheckedCreateNestedManyWithoutProfileInput } from '../comment/comment-unchecked-create-nested-many-without-profile.input';

@InputType()
export class ProfileUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    middleName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    designation?: string;

    @Field(() => Int, {nullable:true})
    employeeID?: number;

    @Field(() => Date, {nullable:true})
    dateHired?: Date | string;

    @Field(() => Date, {nullable:true})
    birthDate?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    address?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    contact?: any;

    @Field(() => String, {nullable:true})
    departmentId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => TicketTransactionUncheckedCreateNestedManyWithoutCreatedByProfileInput, {nullable:true})
    ticketCreatedBy?: TicketTransactionUncheckedCreateNestedManyWithoutCreatedByProfileInput;

    @Field(() => TicketTransactionUncheckedCreateNestedManyWithoutAssignedToProfileInput, {nullable:true})
    ticketAssignedTo?: TicketTransactionUncheckedCreateNestedManyWithoutAssignedToProfileInput;

    @Field(() => TicketTransactionUncheckedCreateNestedManyWithoutAssignedByProfileInput, {nullable:true})
    ticketAssignedBy?: TicketTransactionUncheckedCreateNestedManyWithoutAssignedByProfileInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutProfileInput, {nullable:true})
    comment?: CommentUncheckedCreateNestedManyWithoutProfileInput;
}
