import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_beckerWhereUniqueInput } from '../chats-becker/chats-becker-where-unique.input';
import { Type } from 'class-transformer';
import { chats_beckerCreateInput } from '../chats-becker/chats-becker-create.input';
import { chats_beckerUpdateInput } from '../chats-becker/chats-becker-update.input';

@ArgsType()
export class UpsertOnechatsBeckerArgs {

    @Field(() => chats_beckerWhereUniqueInput, {nullable:false})
    @Type(() => chats_beckerWhereUniqueInput)
    where!: chats_beckerWhereUniqueInput;

    @Field(() => chats_beckerCreateInput, {nullable:false})
    @Type(() => chats_beckerCreateInput)
    create!: chats_beckerCreateInput;

    @Field(() => chats_beckerUpdateInput, {nullable:false})
    @Type(() => chats_beckerUpdateInput)
    update!: chats_beckerUpdateInput;
}
