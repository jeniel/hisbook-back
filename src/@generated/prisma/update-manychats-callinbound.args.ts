import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_callinboundUpdateManyMutationInput } from '../chats-callinbound/chats-callinbound-update-many-mutation.input';
import { Type } from 'class-transformer';
import { chats_callinboundWhereInput } from '../chats-callinbound/chats-callinbound-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManychatsCallinboundArgs {

    @Field(() => chats_callinboundUpdateManyMutationInput, {nullable:false})
    @Type(() => chats_callinboundUpdateManyMutationInput)
    data!: chats_callinboundUpdateManyMutationInput;

    @Field(() => chats_callinboundWhereInput, {nullable:true})
    @Type(() => chats_callinboundWhereInput)
    where?: chats_callinboundWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
