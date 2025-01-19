import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumTicketStatusNullableFilter } from '../prisma/enum-ticket-status-nullable-filter.input';
import { EnumTicketPriorityNullableFilter } from '../prisma/enum-ticket-priority-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TicketTransactionScalarWhereInput {

    @Field(() => [TicketTransactionScalarWhereInput], {nullable:true})
    AND?: Array<TicketTransactionScalarWhereInput>;

    @Field(() => [TicketTransactionScalarWhereInput], {nullable:true})
    OR?: Array<TicketTransactionScalarWhereInput>;

    @Field(() => [TicketTransactionScalarWhereInput], {nullable:true})
    NOT?: Array<TicketTransactionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumTicketStatusNullableFilter, {nullable:true})
    status?: EnumTicketStatusNullableFilter;

    @Field(() => EnumTicketPriorityNullableFilter, {nullable:true})
    priority?: EnumTicketPriorityNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    departmentFrom?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    departmentTo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ticketCreatedBy?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ticketAssignedTo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ticketCategoryId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    createdBy?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updatedBy?: StringNullableFilter;
}
