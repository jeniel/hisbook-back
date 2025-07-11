import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_callinboundUpdateInput } from '../chats-callinbound/chats-callinbound-update.input';
import { Type } from 'class-transformer';
import { chats_callinboundWhereUniqueInput } from '../chats-callinbound/chats-callinbound-where-unique.input';

@ArgsType()
export class UpdateOnechatsCallinboundArgs {

    @Field(() => chats_callinboundUpdateInput, {nullable:false})
    @Type(() => chats_callinboundUpdateInput)
    data!: chats_callinboundUpdateInput;

    @Field(() => chats_callinboundWhereUniqueInput, {nullable:false})
    @Type(() => chats_callinboundWhereUniqueInput)
    where!: chats_callinboundWhereUniqueInput;
}
