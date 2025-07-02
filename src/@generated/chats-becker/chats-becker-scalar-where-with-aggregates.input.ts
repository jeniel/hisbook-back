import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
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

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    session_id?: StringWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    message?: JsonNullableWithAggregatesFilter;
}
