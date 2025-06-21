import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { documentsWhereInput } from './documents-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { TenantNullableScalarRelationFilter } from '../tenant/tenant-nullable-scalar-relation-filter.input';

@InputType()
export class documentsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: bigint | number;

    @Field(() => [documentsWhereInput], {nullable:true})
    AND?: Array<documentsWhereInput>;

    @Field(() => [documentsWhereInput], {nullable:true})
    OR?: Array<documentsWhereInput>;

    @Field(() => [documentsWhereInput], {nullable:true})
    NOT?: Array<documentsWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tenantId?: StringNullableFilter;

    @Field(() => TenantNullableScalarRelationFilter, {nullable:true})
    tenant?: TenantNullableScalarRelationFilter;
}
