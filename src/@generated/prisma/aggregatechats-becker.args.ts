import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_beckerWhereInput } from '../chats-becker/chats-becker-where.input';
import { Type } from 'class-transformer';
import { chats_beckerOrderByWithRelationInput } from '../chats-becker/chats-becker-order-by-with-relation.input';
import { chats_beckerWhereUniqueInput } from '../chats-becker/chats-becker-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatechatsBeckerArgs {

    @Field(() => chats_beckerWhereInput, {nullable:true})
    @Type(() => chats_beckerWhereInput)
    where?: chats_beckerWhereInput;

    @Field(() => [chats_beckerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<chats_beckerOrderByWithRelationInput>;

    @Field(() => chats_beckerWhereUniqueInput, {nullable:true})
    cursor?: chats_beckerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
