import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';

@InputType()
export class documentsScalarWhereWithAggregatesInput {

    @Field(() => [documentsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<documentsScalarWhereWithAggregatesInput>;

    @Field(() => [documentsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<documentsScalarWhereWithAggregatesInput>;

    @Field(() => [documentsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<documentsScalarWhereWithAggregatesInput>;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    client_id?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    content?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metadata?: JsonNullableWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    tenantId?: StringNullableWithAggregatesFilter;
}
