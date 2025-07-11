import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_callinboundWhereUniqueInput } from '../chats-callinbound/chats-callinbound-where-unique.input';
import { Type } from 'class-transformer';
import { chats_callinboundCreateInput } from '../chats-callinbound/chats-callinbound-create.input';
import { chats_callinboundUpdateInput } from '../chats-callinbound/chats-callinbound-update.input';

@ArgsType()
export class UpsertOnechatsCallinboundArgs {

    @Field(() => chats_callinboundWhereUniqueInput, {nullable:false})
    @Type(() => chats_callinboundWhereUniqueInput)
    where!: chats_callinboundWhereUniqueInput;

    @Field(() => chats_callinboundCreateInput, {nullable:false})
    @Type(() => chats_callinboundCreateInput)
    create!: chats_callinboundCreateInput;

    @Field(() => chats_callinboundUpdateInput, {nullable:false})
    @Type(() => chats_callinboundUpdateInput)
    update!: chats_callinboundUpdateInput;
}
