import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class documents_demoScalarWhereWithAggregatesInput {

    @Field(() => [documents_demoScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<documents_demoScalarWhereWithAggregatesInput>;

    @Field(() => [documents_demoScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<documents_demoScalarWhereWithAggregatesInput>;

    @Field(() => [documents_demoScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<documents_demoScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: BigIntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    content?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metadata?: JsonNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeNullableWithAggregatesFilter;
}
