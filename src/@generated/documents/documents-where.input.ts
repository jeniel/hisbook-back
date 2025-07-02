import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { TenantNullableScalarRelationFilter } from '../tenant/tenant-nullable-scalar-relation-filter.input';

@InputType()
export class documentsWhereInput {

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

    @Field(() => StringNullableFilter, {nullable:true})
    client_id?: StringNullableFilter;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => TenantNullableScalarRelationFilter, {nullable:true})
    tenant?: TenantNullableScalarRelationFilter;
}
