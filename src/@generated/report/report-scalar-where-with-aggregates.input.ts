import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class ReportScalarWhereWithAggregatesInput {

    @Field(() => [ReportScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReportScalarWhereWithAggregatesInput>;

    @Field(() => [ReportScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReportScalarWhereWithAggregatesInput>;

    @Field(() => [ReportScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReportScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    session_id?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    keywords?: StringNullableListFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    message_intent?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    tenantId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    createdBy?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    updatedBy?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    count?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    keyword?: StringNullableWithAggregatesFilter;
}
