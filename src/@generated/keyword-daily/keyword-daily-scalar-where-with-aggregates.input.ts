import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class keyword_dailyScalarWhereWithAggregatesInput {

    @Field(() => [keyword_dailyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<keyword_dailyScalarWhereWithAggregatesInput>;

    @Field(() => [keyword_dailyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<keyword_dailyScalarWhereWithAggregatesInput>;

    @Field(() => [keyword_dailyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<keyword_dailyScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    keyword?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    count?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    tenantId?: StringNullableWithAggregatesFilter;
}
