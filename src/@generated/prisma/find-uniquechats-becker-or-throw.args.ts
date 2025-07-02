import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_beckerWhereUniqueInput } from '../chats-becker/chats-becker-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquechatsBeckerOrThrowArgs {

    @Field(() => chats_beckerWhereUniqueInput, {nullable:false})
    @Type(() => chats_beckerWhereUniqueInput)
    where!: chats_beckerWhereUniqueInput;
}
