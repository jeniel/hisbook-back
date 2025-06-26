import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chat_beckerUpdateInput } from '../chat-becker/chat-becker-update.input';
import { Type } from 'class-transformer';
import { chat_beckerWhereUniqueInput } from '../chat-becker/chat-becker-where-unique.input';

@ArgsType()
export class UpdateOnechatBeckerArgs {

    @Field(() => chat_beckerUpdateInput, {nullable:false})
    @Type(() => chat_beckerUpdateInput)
    data!: chat_beckerUpdateInput;

    @Field(() => chat_beckerWhereUniqueInput, {nullable:false})
    @Type(() => chat_beckerWhereUniqueInput)
    where!: chat_beckerWhereUniqueInput;
}
