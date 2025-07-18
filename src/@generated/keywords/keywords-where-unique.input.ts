import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { keywordsWhereInput } from './keywords-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { TenantNullableScalarRelationFilter } from '../tenant/tenant-nullable-scalar-relation-filter.input';

@InputType()
export class keywordsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    keyword?: string;

    @Field(() => [keywordsWhereInput], {nullable:true})
    AND?: Array<keywordsWhereInput>;

    @Field(() => [keywordsWhereInput], {nullable:true})
    OR?: Array<keywordsWhereInput>;

    @Field(() => [keywordsWhereInput], {nullable:true})
    NOT?: Array<keywordsWhereInput>;

    @Field(() => IntNullableFilter, {nullable:true})
    count?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tenantId?: StringNullableFilter;

    @Field(() => TenantNullableScalarRelationFilter, {nullable:true})
    tenant?: TenantNullableScalarRelationFilter;
}
