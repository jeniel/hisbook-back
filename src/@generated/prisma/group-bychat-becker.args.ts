import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chat_beckerWhereInput } from '../chat-becker/chat-becker-where.input';
import { Type } from 'class-transformer';
import { chat_beckerOrderByWithAggregationInput } from '../chat-becker/chat-becker-order-by-with-aggregation.input';
import { Chat_beckerScalarFieldEnum } from './chat-becker-scalar-field.enum';
import { chat_beckerScalarWhereWithAggregatesInput } from '../chat-becker/chat-becker-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBychatBeckerArgs {

    @Field(() => chat_beckerWhereInput, {nullable:true})
    @Type(() => chat_beckerWhereInput)
    where?: chat_beckerWhereInput;

    @Field(() => [chat_beckerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<chat_beckerOrderByWithAggregationInput>;

    @Field(() => [Chat_beckerScalarFieldEnum], {nullable:false})
    by!: Array<`${Chat_beckerScalarFieldEnum}`>;

    @Field(() => chat_beckerScalarWhereWithAggregatesInput, {nullable:true})
    having?: chat_beckerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
