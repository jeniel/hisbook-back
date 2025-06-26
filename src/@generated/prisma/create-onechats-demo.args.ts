import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_demoCreateInput } from '../chats-demo/chats-demo-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnechatsDemoArgs {

    @Field(() => chats_demoCreateInput, {nullable:false})
    @Type(() => chats_demoCreateInput)
    data!: chats_demoCreateInput;
}
