import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_callinboundWhereInput } from '../chats-callinbound/chats-callinbound-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManychatsCallinboundArgs {

    @Field(() => chats_callinboundWhereInput, {nullable:true})
    @Type(() => chats_callinboundWhereInput)
    where?: chats_callinboundWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
