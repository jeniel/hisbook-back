import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_demoUpdateInput } from '../chats-demo/chats-demo-update.input';
import { Type } from 'class-transformer';
import { chats_demoWhereUniqueInput } from '../chats-demo/chats-demo-where-unique.input';

@ArgsType()
export class UpdateOnechatsDemoArgs {

    @Field(() => chats_demoUpdateInput, {nullable:false})
    @Type(() => chats_demoUpdateInput)
    data!: chats_demoUpdateInput;

    @Field(() => chats_demoWhereUniqueInput, {nullable:false})
    @Type(() => chats_demoWhereUniqueInput)
    where!: chats_demoWhereUniqueInput;
}
