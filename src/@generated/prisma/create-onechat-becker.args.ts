import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chat_beckerCreateInput } from '../chat-becker/chat-becker-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnechatBeckerArgs {

    @Field(() => chat_beckerCreateInput, {nullable:false})
    @Type(() => chat_beckerCreateInput)
    data!: chat_beckerCreateInput;
}
