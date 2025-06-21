import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { n8n_chat_historiesWhereInput } from './n-8-n-chat-histories-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class n8n_chat_historiesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [n8n_chat_historiesWhereInput], {nullable:true})
    AND?: Array<n8n_chat_historiesWhereInput>;

    @Field(() => [n8n_chat_historiesWhereInput], {nullable:true})
    OR?: Array<n8n_chat_historiesWhereInput>;

    @Field(() => [n8n_chat_historiesWhereInput], {nullable:true})
    NOT?: Array<n8n_chat_historiesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    session_id?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    message?: JsonFilter;
}
