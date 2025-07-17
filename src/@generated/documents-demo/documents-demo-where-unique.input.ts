import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { documents_demoWhereInput } from './documents-demo-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class documents_demoWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: bigint | number;

    @Field(() => [documents_demoWhereInput], {nullable:true})
    AND?: Array<documents_demoWhereInput>;

    @Field(() => [documents_demoWhereInput], {nullable:true})
    OR?: Array<documents_demoWhereInput>;

    @Field(() => [documents_demoWhereInput], {nullable:true})
    NOT?: Array<documents_demoWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;
}
