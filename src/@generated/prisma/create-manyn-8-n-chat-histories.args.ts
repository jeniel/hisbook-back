import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { n8n_chat_historiesCreateManyInput } from '../n-8-n-chat-histories/n-8-n-chat-histories-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyn8NChatHistoriesArgs {

    @Field(() => [n8n_chat_historiesCreateManyInput], {nullable:false})
    @Type(() => n8n_chat_historiesCreateManyInput)
    data!: Array<n8n_chat_historiesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
