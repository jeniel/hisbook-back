import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketWhereInput } from './ticket-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumStatusFilter } from '../prisma/enum-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { DepartmentScalarRelationFilter } from '../department/department-scalar-relation-filter.input';
import { AuditLogListRelationFilter } from '../audit-log/audit-log-list-relation-filter.input';

@InputType()
export class TicketWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [TicketWhereInput], {nullable:true})
    AND?: Array<TicketWhereInput>;

    @Field(() => [TicketWhereInput], {nullable:true})
    OR?: Array<TicketWhereInput>;

    @Field(() => [TicketWhereInput], {nullable:true})
    NOT?: Array<TicketWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    subject?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    missedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    floor?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    screenshot?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    message?: StringNullableFilter;

    @Field(() => EnumStatusFilter, {nullable:true})
    status?: EnumStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    remarks?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updatedBy?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    createdById?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    departmentId?: StringFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    createdBy?: UserScalarRelationFilter;

    @Field(() => DepartmentScalarRelationFilter, {nullable:true})
    department?: DepartmentScalarRelationFilter;

    @Field(() => AuditLogListRelationFilter, {nullable:true})
    auditLogs?: AuditLogListRelationFilter;
}
