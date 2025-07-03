import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';

@InputType()
export class chats_beckerScalarWhereWithAggregatesInput {

    @Field(() => [chats_beckerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<chats_beckerScalarWhereWithAggregatesInput>;

    @Field(() => [chats_beckerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<chats_beckerScalarWhereWithAggregatesInput>;

    @Field(() => [chats_beckerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<chats_beckerScalarWhereWithAggregatesInput>;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    id?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    session_id?: StringWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    message?: JsonNullableWithAggregatesFilter;
}
