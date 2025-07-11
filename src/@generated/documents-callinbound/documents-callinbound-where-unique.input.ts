import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { documents_callinboundWhereInput } from './documents-callinbound-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class documents_callinboundWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: bigint | number;

    @Field(() => [documents_callinboundWhereInput], {nullable:true})
    AND?: Array<documents_callinboundWhereInput>;

    @Field(() => [documents_callinboundWhereInput], {nullable:true})
    OR?: Array<documents_callinboundWhereInput>;

    @Field(() => [documents_callinboundWhereInput], {nullable:true})
    NOT?: Array<documents_callinboundWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;
}
