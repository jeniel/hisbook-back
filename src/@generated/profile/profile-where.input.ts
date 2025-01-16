import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DepartmentNullableScalarRelationFilter } from '../prisma/department-nullable-scalar-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../prisma/user-nullable-scalar-relation-filter.input';
import { TicketTransactionListRelationFilter } from '../ticket-transaction/ticket-transaction-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';

@InputType()
export class ProfileWhereInput {

    @Field(() => [ProfileWhereInput], {nullable:true})
    AND?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    OR?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    NOT?: Array<ProfileWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    middleName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    designation?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    employeeID?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    dateHired?: DateTimeNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    address?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    contact?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    departmentId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    createdBy?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updatedBy?: StringNullableFilter;

    @Field(() => DepartmentNullableScalarRelationFilter, {nullable:true})
    department?: DepartmentNullableScalarRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: UserNullableScalarRelationFilter;

    @Field(() => TicketTransactionListRelationFilter, {nullable:true})
    tikcetTransaction?: TicketTransactionListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comment?: CommentListRelationFilter;
}
