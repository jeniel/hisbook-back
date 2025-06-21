import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { n8n_chat_historiesCreateInput } from '../n-8-n-chat-histories/n-8-n-chat-histories-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnen8NChatHistoriesArgs {

    @Field(() => n8n_chat_historiesCreateInput, {nullable:false})
    @Type(() => n8n_chat_historiesCreateInput)
    data!: n8n_chat_historiesCreateInput;
}
