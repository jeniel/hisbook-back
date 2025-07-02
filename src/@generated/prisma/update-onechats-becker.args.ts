import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_beckerUpdateInput } from '../chats-becker/chats-becker-update.input';
import { Type } from 'class-transformer';
import { chats_beckerWhereUniqueInput } from '../chats-becker/chats-becker-where-unique.input';

@ArgsType()
export class UpdateOnechatsBeckerArgs {

    @Field(() => chats_beckerUpdateInput, {nullable:false})
    @Type(() => chats_beckerUpdateInput)
    data!: chats_beckerUpdateInput;

    @Field(() => chats_beckerWhereUniqueInput, {nullable:false})
    @Type(() => chats_beckerWhereUniqueInput)
    where!: chats_beckerWhereUniqueInput;
}
