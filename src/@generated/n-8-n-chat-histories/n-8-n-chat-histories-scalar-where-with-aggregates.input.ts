import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';

@InputType()
export class n8n_chat_historiesScalarWhereWithAggregatesInput {

    @Field(() => [n8n_chat_historiesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<n8n_chat_historiesScalarWhereWithAggregatesInput>;

    @Field(() => [n8n_chat_historiesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<n8n_chat_historiesScalarWhereWithAggregatesInput>;

    @Field(() => [n8n_chat_historiesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<n8n_chat_historiesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    session_id?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    message?: JsonWithAggregatesFilter;
}
