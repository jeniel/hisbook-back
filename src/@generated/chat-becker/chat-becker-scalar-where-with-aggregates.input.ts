import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';

@InputType()
export class chat_beckerScalarWhereWithAggregatesInput {

    @Field(() => [chat_beckerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<chat_beckerScalarWhereWithAggregatesInput>;

    @Field(() => [chat_beckerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<chat_beckerScalarWhereWithAggregatesInput>;

    @Field(() => [chat_beckerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<chat_beckerScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    session_id?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    message?: JsonWithAggregatesFilter;
}
