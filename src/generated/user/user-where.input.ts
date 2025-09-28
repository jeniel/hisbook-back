import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumRoleNullableListFilter } from '../prisma/enum-role-nullable-list-filter.input';
import { ProfileNullableScalarRelationFilter } from '../profile/profile-nullable-scalar-relation-filter.input';
import { PostsListRelationFilter } from '../posts/posts-list-relation-filter.input';
import { TicketListRelationFilter } from '../ticket/ticket-list-relation-filter.input';
import { AuditLogListRelationFilter } from '../audit-log/audit-log-list-relation-filter.input';
import { DepartmentNullableScalarRelationFilter } from '../department/department-nullable-scalar-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    hashedPassword?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    hashedRefreshToken?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => EnumRoleNullableListFilter, {nullable:true})
    role?: EnumRoleNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    departmentId?: StringNullableFilter;

    @Field(() => ProfileNullableScalarRelationFilter, {nullable:true})
    profile?: ProfileNullableScalarRelationFilter;

    @Field(() => PostsListRelationFilter, {nullable:true})
    posts?: PostsListRelationFilter;

    @Field(() => TicketListRelationFilter, {nullable:true})
    tickets?: TicketListRelationFilter;

    @Field(() => AuditLogListRelationFilter, {nullable:true})
    auditLogs?: AuditLogListRelationFilter;

    @Field(() => DepartmentNullableScalarRelationFilter, {nullable:true})
    department?: DepartmentNullableScalarRelationFilter;
}
