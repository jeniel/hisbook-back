import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_demoWhereUniqueInput } from '../chats-demo/chats-demo-where-unique.input';
import { Type } from 'class-transformer';
import { chats_demoCreateInput } from '../chats-demo/chats-demo-create.input';
import { chats_demoUpdateInput } from '../chats-demo/chats-demo-update.input';

@ArgsType()
export class UpsertOnechatsDemoArgs {

    @Field(() => chats_demoWhereUniqueInput, {nullable:false})
    @Type(() => chats_demoWhereUniqueInput)
    where!: chats_demoWhereUniqueInput;

    @Field(() => chats_demoCreateInput, {nullable:false})
    @Type(() => chats_demoCreateInput)
    create!: chats_demoCreateInput;

    @Field(() => chats_demoUpdateInput, {nullable:false})
    @Type(() => chats_demoUpdateInput)
    update!: chats_demoUpdateInput;
}
