import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';

@InputType()
export class documentsScalarWhereInput {

    @Field(() => [documentsScalarWhereInput], {nullable:true})
    AND?: Array<documentsScalarWhereInput>;

    @Field(() => [documentsScalarWhereInput], {nullable:true})
    OR?: Array<documentsScalarWhereInput>;

    @Field(() => [documentsScalarWhereInput], {nullable:true})
    NOT?: Array<documentsScalarWhereInput>;

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
}
