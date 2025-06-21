import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { n8n_chat_historiesWhereInput } from '../n-8-n-chat-histories/n-8-n-chat-histories-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyn8NChatHistoriesArgs {

    @Field(() => n8n_chat_historiesWhereInput, {nullable:true})
    @Type(() => n8n_chat_historiesWhereInput)
    where?: n8n_chat_historiesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
