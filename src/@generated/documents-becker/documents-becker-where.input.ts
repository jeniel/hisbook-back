import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class documents_beckerWhereInput {

    @Field(() => [documents_beckerWhereInput], {nullable:true})
    AND?: Array<documents_beckerWhereInput>;

    @Field(() => [documents_beckerWhereInput], {nullable:true})
    OR?: Array<documents_beckerWhereInput>;

    @Field(() => [documents_beckerWhereInput], {nullable:true})
    NOT?: Array<documents_beckerWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;
}
