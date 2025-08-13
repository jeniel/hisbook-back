import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumRoleNullableListFilter } from '../prisma/enum-role-nullable-list-filter.input';
import { ProfileNullableScalarRelationFilter } from '../profile/profile-nullable-scalar-relation-filter.input';
import { PostsListRelationFilter } from '../posts/posts-list-relation-filter.input';
import { MissedLogoutTicketListRelationFilter } from '../missed-logout-ticket/missed-logout-ticket-list-relation-filter.input';
import { DepartmentNullableScalarRelationFilter } from '../department/department-nullable-scalar-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    hashedPassword?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    hashedRefreshToken?: StringNullableFilter;

    @Field(() => EnumRoleNullableListFilter, {nullable:true})
    role?: EnumRoleNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    departmentId?: StringNullableFilter;

    @Field(() => ProfileNullableScalarRelationFilter, {nullable:true})
    profile?: ProfileNullableScalarRelationFilter;

    @Field(() => PostsListRelationFilter, {nullable:true})
    posts?: PostsListRelationFilter;

    @Field(() => MissedLogoutTicketListRelationFilter, {nullable:true})
    MissedLogoutTicket?: MissedLogoutTicketListRelationFilter;

    @Field(() => DepartmentNullableScalarRelationFilter, {nullable:true})
    department?: DepartmentNullableScalarRelationFilter;
}
