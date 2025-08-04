import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FacebookPagePostScalarWhereWithAggregatesInput {

    @Field(() => [FacebookPagePostScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FacebookPagePostScalarWhereWithAggregatesInput>;

    @Field(() => [FacebookPagePostScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FacebookPagePostScalarWhereWithAggregatesInput>;

    @Field(() => [FacebookPagePostScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FacebookPagePostScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    message?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdTime?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    pageId?: StringWithAggregatesFilter;
}
