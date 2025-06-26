import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chat_beckerWhereUniqueInput } from '../chat-becker/chat-becker-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquechatBeckerOrThrowArgs {

    @Field(() => chat_beckerWhereUniqueInput, {nullable:false})
    @Type(() => chat_beckerWhereUniqueInput)
    where!: chat_beckerWhereUniqueInput;
}
