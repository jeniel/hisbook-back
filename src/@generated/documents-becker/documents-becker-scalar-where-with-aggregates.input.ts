import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';

@InputType()
export class documents_beckerScalarWhereWithAggregatesInput {

    @Field(() => [documents_beckerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<documents_beckerScalarWhereWithAggregatesInput>;

    @Field(() => [documents_beckerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<documents_beckerScalarWhereWithAggregatesInput>;

    @Field(() => [documents_beckerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<documents_beckerScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    content?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metadata?: JsonNullableWithAggregatesFilter;
}
