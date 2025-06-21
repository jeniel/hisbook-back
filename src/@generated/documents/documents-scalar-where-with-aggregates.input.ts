import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';

@InputType()
export class documentsScalarWhereWithAggregatesInput {

    @Field(() => [documentsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<documentsScalarWhereWithAggregatesInput>;

    @Field(() => [documentsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<documentsScalarWhereWithAggregatesInput>;

    @Field(() => [documentsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<documentsScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: BigIntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    content?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metadata?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    tenantId?: StringNullableWithAggregatesFilter;
}
