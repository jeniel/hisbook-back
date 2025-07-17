import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereInput } from './report-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { TenantNullableScalarRelationFilter } from '../tenant/tenant-nullable-scalar-relation-filter.input';

@InputType()
export class ReportWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ReportWhereInput], {nullable:true})
    AND?: Array<ReportWhereInput>;

    @Field(() => [ReportWhereInput], {nullable:true})
    OR?: Array<ReportWhereInput>;

    @Field(() => [ReportWhereInput], {nullable:true})
    NOT?: Array<ReportWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    session_id?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    keywords?: StringNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    message_intent?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tenantId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    createdBy?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updatedBy?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    count?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    keyword?: StringNullableFilter;

    @Field(() => TenantNullableScalarRelationFilter, {nullable:true})
    tenant?: TenantNullableScalarRelationFilter;
}
