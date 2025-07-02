import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_beckerWhereInput } from '../chats-becker/chats-becker-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManychatsBeckerArgs {

    @Field(() => chats_beckerWhereInput, {nullable:true})
    @Type(() => chats_beckerWhereInput)
    where?: chats_beckerWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
