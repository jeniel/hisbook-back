import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chat_beckerWhereInput } from '../chat-becker/chat-becker-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManychatBeckerArgs {

    @Field(() => chat_beckerWhereInput, {nullable:true})
    @Type(() => chat_beckerWhereInput)
    where?: chat_beckerWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
