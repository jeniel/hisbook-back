import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chat_beckerWhereUniqueInput } from '../chat-becker/chat-becker-where-unique.input';
import { Type } from 'class-transformer';
import { chat_beckerCreateInput } from '../chat-becker/chat-becker-create.input';
import { chat_beckerUpdateInput } from '../chat-becker/chat-becker-update.input';

@ArgsType()
export class UpsertOnechatBeckerArgs {

    @Field(() => chat_beckerWhereUniqueInput, {nullable:false})
    @Type(() => chat_beckerWhereUniqueInput)
    where!: chat_beckerWhereUniqueInput;

    @Field(() => chat_beckerCreateInput, {nullable:false})
    @Type(() => chat_beckerCreateInput)
    create!: chat_beckerCreateInput;

    @Field(() => chat_beckerUpdateInput, {nullable:false})
    @Type(() => chat_beckerUpdateInput)
    update!: chat_beckerUpdateInput;
}
