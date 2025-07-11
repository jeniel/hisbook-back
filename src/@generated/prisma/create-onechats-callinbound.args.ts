import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_callinboundCreateInput } from '../chats-callinbound/chats-callinbound-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnechatsCallinboundArgs {

    @Field(() => chats_callinboundCreateInput, {nullable:false})
    @Type(() => chats_callinboundCreateInput)
    data!: chats_callinboundCreateInput;
}
