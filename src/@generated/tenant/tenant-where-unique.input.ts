import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantWhereInput } from './tenant-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { DocumentsListRelationFilter } from '../prisma/documents-list-relation-filter.input';

@InputType()
export class TenantWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [TenantWhereInput], {nullable:true})
    AND?: Array<TenantWhereInput>;

    @Field(() => [TenantWhereInput], {nullable:true})
    OR?: Array<TenantWhereInput>;

    @Field(() => [TenantWhereInput], {nullable:true})
    NOT?: Array<TenantWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isApprove?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => DocumentsListRelationFilter, {nullable:true})
    documents?: DocumentsListRelationFilter;
}
