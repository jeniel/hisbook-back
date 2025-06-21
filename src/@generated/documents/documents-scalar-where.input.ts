import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class documentsScalarWhereInput {

    @Field(() => [documentsScalarWhereInput], {nullable:true})
    AND?: Array<documentsScalarWhereInput>;

    @Field(() => [documentsScalarWhereInput], {nullable:true})
    OR?: Array<documentsScalarWhereInput>;

    @Field(() => [documentsScalarWhereInput], {nullable:true})
    NOT?: Array<documentsScalarWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tenantId?: StringNullableFilter;
}
