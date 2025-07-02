import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_beckerCreateInput } from '../chats-becker/chats-becker-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnechatsBeckerArgs {

    @Field(() => chats_beckerCreateInput, {nullable:false})
    @Type(() => chats_beckerCreateInput)
    data!: chats_beckerCreateInput;
}
