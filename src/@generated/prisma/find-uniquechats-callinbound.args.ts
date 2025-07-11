import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_callinboundWhereUniqueInput } from '../chats-callinbound/chats-callinbound-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquechatsCallinboundArgs {

    @Field(() => chats_callinboundWhereUniqueInput, {nullable:false})
    @Type(() => chats_callinboundWhereUniqueInput)
    where!: chats_callinboundWhereUniqueInput;
}
