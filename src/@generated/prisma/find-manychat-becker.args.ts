import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chat_beckerWhereInput } from '../chat-becker/chat-becker-where.input';
import { Type } from 'class-transformer';
import { chat_beckerOrderByWithRelationInput } from '../chat-becker/chat-becker-order-by-with-relation.input';
import { chat_beckerWhereUniqueInput } from '../chat-becker/chat-becker-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Chat_beckerScalarFieldEnum } from './chat-becker-scalar-field.enum';

@ArgsType()
export class FindManychatBeckerArgs {

    @Field(() => chat_beckerWhereInput, {nullable:true})
    @Type(() => chat_beckerWhereInput)
    where?: chat_beckerWhereInput;

    @Field(() => [chat_beckerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<chat_beckerOrderByWithRelationInput>;

    @Field(() => chat_beckerWhereUniqueInput, {nullable:true})
    cursor?: chat_beckerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Chat_beckerScalarFieldEnum], {nullable:true})
    distinct?: Array<`${Chat_beckerScalarFieldEnum}`>;
}
