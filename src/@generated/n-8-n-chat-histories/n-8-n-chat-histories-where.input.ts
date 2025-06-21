import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class n8n_chat_historiesWhereInput {

    @Field(() => [n8n_chat_historiesWhereInput], {nullable:true})
    AND?: Array<n8n_chat_historiesWhereInput>;

    @Field(() => [n8n_chat_historiesWhereInput], {nullable:true})
    OR?: Array<n8n_chat_historiesWhereInput>;

    @Field(() => [n8n_chat_historiesWhereInput], {nullable:true})
    NOT?: Array<n8n_chat_historiesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    session_id?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    message?: JsonFilter;
}
