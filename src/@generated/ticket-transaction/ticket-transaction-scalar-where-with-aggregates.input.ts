import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumTicketStatusNullableWithAggregatesFilter } from '../prisma/enum-ticket-status-nullable-with-aggregates-filter.input';
import { EnumTicketPriorityNullableWithAggregatesFilter } from '../prisma/enum-ticket-priority-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TicketTransactionScalarWhereWithAggregatesInput {

    @Field(() => [TicketTransactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TicketTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [TicketTransactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TicketTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [TicketTransactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TicketTransactionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    title?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => EnumTicketStatusNullableWithAggregatesFilter, {nullable:true})
    status?: EnumTicketStatusNullableWithAggregatesFilter;

    @Field(() => EnumTicketPriorityNullableWithAggregatesFilter, {nullable:true})
    priority?: EnumTicketPriorityNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    departmentFrom?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    departmentTo?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    ticketCreatedBy?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    ticketAssignedTo?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    ticketCategoryId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    createdBy?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    updatedBy?: StringNullableWithAggregatesFilter;
}
