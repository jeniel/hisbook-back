import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionWhereInput } from './ticket-transaction-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumTicketStatusNullableFilter } from '../prisma/enum-ticket-status-nullable-filter.input';
import { EnumTicketPriorityNullableFilter } from '../prisma/enum-ticket-priority-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { ProfileNullableScalarRelationFilter } from '../prisma/profile-nullable-scalar-relation-filter.input';
import { DepartmentNullableScalarRelationFilter } from '../prisma/department-nullable-scalar-relation-filter.input';
import { TicketCategoryNullableScalarRelationFilter } from '../prisma/ticket-category-nullable-scalar-relation-filter.input';

@InputType()
export class TicketTransactionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    ticketNumber?: string;

    @Field(() => [TicketTransactionWhereInput], {nullable:true})
    AND?: Array<TicketTransactionWhereInput>;

    @Field(() => [TicketTransactionWhereInput], {nullable:true})
    OR?: Array<TicketTransactionWhereInput>;

    @Field(() => [TicketTransactionWhereInput], {nullable:true})
    NOT?: Array<TicketTransactionWhereInput>;

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
    ticketAssignedBy?: StringNullableFilter;

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

    @Field(() => CommentListRelationFilter, {nullable:true})
    comment?: CommentListRelationFilter;

    @Field(() => ProfileNullableScalarRelationFilter, {nullable:true})
    createdByProfile?: ProfileNullableScalarRelationFilter;

    @Field(() => ProfileNullableScalarRelationFilter, {nullable:true})
    assignedToProfile?: ProfileNullableScalarRelationFilter;

    @Field(() => ProfileNullableScalarRelationFilter, {nullable:true})
    assignedByProfile?: ProfileNullableScalarRelationFilter;

    @Field(() => DepartmentNullableScalarRelationFilter, {nullable:true})
    fromDepartment?: DepartmentNullableScalarRelationFilter;

    @Field(() => DepartmentNullableScalarRelationFilter, {nullable:true})
    toDepartment?: DepartmentNullableScalarRelationFilter;

    @Field(() => TicketCategoryNullableScalarRelationFilter, {nullable:true})
    ticketCategory?: TicketCategoryNullableScalarRelationFilter;
}
