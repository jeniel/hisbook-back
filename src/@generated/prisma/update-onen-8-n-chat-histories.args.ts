import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { n8n_chat_historiesUpdateInput } from '../n-8-n-chat-histories/n-8-n-chat-histories-update.input';
import { Type } from 'class-transformer';
import { n8n_chat_historiesWhereUniqueInput } from '../n-8-n-chat-histories/n-8-n-chat-histories-where-unique.input';

@ArgsType()
export class UpdateOnen8NChatHistoriesArgs {

    @Field(() => n8n_chat_historiesUpdateInput, {nullable:false})
    @Type(() => n8n_chat_historiesUpdateInput)
    data!: n8n_chat_historiesUpdateInput;

    @Field(() => n8n_chat_historiesWhereUniqueInput, {nullable:false})
    @Type(() => n8n_chat_historiesWhereUniqueInput)
    where!: n8n_chat_historiesWhereUniqueInput;
}
