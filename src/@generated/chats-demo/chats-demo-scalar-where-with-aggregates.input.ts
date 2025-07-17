import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class chats_demoScalarWhereWithAggregatesInput {

    @Field(() => [chats_demoScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<chats_demoScalarWhereWithAggregatesInput>;

    @Field(() => [chats_demoScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<chats_demoScalarWhereWithAggregatesInput>;

    @Field(() => [chats_demoScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<chats_demoScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    session_id?: StringWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    message?: JsonNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeNullableWithAggregatesFilter;
}
