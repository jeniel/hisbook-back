import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { n8n_chat_historiesWhereUniqueInput } from '../n-8-n-chat-histories/n-8-n-chat-histories-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnen8NChatHistoriesArgs {

    @Field(() => n8n_chat_historiesWhereUniqueInput, {nullable:false})
    @Type(() => n8n_chat_historiesWhereUniqueInput)
    where!: n8n_chat_historiesWhereUniqueInput;
}
