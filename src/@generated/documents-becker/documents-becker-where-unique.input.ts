import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { documents_beckerWhereInput } from './documents-becker-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class documents_beckerWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [documents_beckerWhereInput], {nullable:true})
    AND?: Array<documents_beckerWhereInput>;

    @Field(() => [documents_beckerWhereInput], {nullable:true})
    OR?: Array<documents_beckerWhereInput>;

    @Field(() => [documents_beckerWhereInput], {nullable:true})
    NOT?: Array<documents_beckerWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;
}
