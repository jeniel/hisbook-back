import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { n8n_chat_historiesWhereUniqueInput } from '../n-8-n-chat-histories/n-8-n-chat-histories-where-unique.input';
import { Type } from 'class-transformer';
import { n8n_chat_historiesCreateInput } from '../n-8-n-chat-histories/n-8-n-chat-histories-create.input';
import { n8n_chat_historiesUpdateInput } from '../n-8-n-chat-histories/n-8-n-chat-histories-update.input';

@ArgsType()
export class UpsertOnen8NChatHistoriesArgs {

    @Field(() => n8n_chat_historiesWhereUniqueInput, {nullable:false})
    @Type(() => n8n_chat_historiesWhereUniqueInput)
    where!: n8n_chat_historiesWhereUniqueInput;

    @Field(() => n8n_chat_historiesCreateInput, {nullable:false})
    @Type(() => n8n_chat_historiesCreateInput)
    create!: n8n_chat_historiesCreateInput;

    @Field(() => n8n_chat_historiesUpdateInput, {nullable:false})
    @Type(() => n8n_chat_historiesUpdateInput)
    update!: n8n_chat_historiesUpdateInput;
}
