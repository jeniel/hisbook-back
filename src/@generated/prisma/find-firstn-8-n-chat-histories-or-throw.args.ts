import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { n8n_chat_historiesWhereInput } from '../n-8-n-chat-histories/n-8-n-chat-histories-where.input';
import { Type } from 'class-transformer';
import { n8n_chat_historiesOrderByWithRelationInput } from '../n-8-n-chat-histories/n-8-n-chat-histories-order-by-with-relation.input';
import { n8n_chat_historiesWhereUniqueInput } from '../n-8-n-chat-histories/n-8-n-chat-histories-where-unique.input';
import { Int } from '@nestjs/graphql';
import { N8n_chat_historiesScalarFieldEnum } from './n-8-n-chat-histories-scalar-field.enum';

@ArgsType()
export class FindFirstn8NChatHistoriesOrThrowArgs {

    @Field(() => n8n_chat_historiesWhereInput, {nullable:true})
    @Type(() => n8n_chat_historiesWhereInput)
    where?: n8n_chat_historiesWhereInput;

    @Field(() => [n8n_chat_historiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<n8n_chat_historiesOrderByWithRelationInput>;

    @Field(() => n8n_chat_historiesWhereUniqueInput, {nullable:true})
    cursor?: n8n_chat_historiesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [N8n_chat_historiesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${N8n_chat_historiesScalarFieldEnum}`>;
}
