import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumTicketStatusNullableFilter } from '../prisma/enum-ticket-status-nullable-filter.input';
import { EnumTicketPriorityNullableFilter } from '../prisma/enum-ticket-priority-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProfileNullableScalarRelationFilter } from '../prisma/profile-nullable-scalar-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';

@InputType()
export class TicketTransactionWhereInput {

    @Field(() => [TicketTransactionWhereInput], {nullable:true})
    AND?: Array<TicketTransactionWhereInput>;

    @Field(() => [TicketTransactionWhereInput], {nullable:true})
    OR?: Array<TicketTransactionWhereInput>;

    @Field(() => [TicketTransactionWhereInput], {nullable:true})
    NOT?: Array<TicketTransactionWhereInput>;

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
    type?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    category?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    subCategory?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    departmentFrom?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    departmentTo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profileId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    createdBy?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updatedBy?: StringNullableFilter;

    @Field(() => ProfileNullableScalarRelationFilter, {nullable:true})
    profile?: ProfileNullableScalarRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comment?: CommentListRelationFilter;
}
