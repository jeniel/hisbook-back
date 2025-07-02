import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_beckerWhereInput } from '../chats-becker/chats-becker-where.input';
import { Type } from 'class-transformer';
import { chats_beckerOrderByWithAggregationInput } from '../chats-becker/chats-becker-order-by-with-aggregation.input';
import { Chats_beckerScalarFieldEnum } from './chats-becker-scalar-field.enum';
import { chats_beckerScalarWhereWithAggregatesInput } from '../chats-becker/chats-becker-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBychatsBeckerArgs {

    @Field(() => chats_beckerWhereInput, {nullable:true})
    @Type(() => chats_beckerWhereInput)
    where?: chats_beckerWhereInput;

    @Field(() => [chats_beckerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<chats_beckerOrderByWithAggregationInput>;

    @Field(() => [Chats_beckerScalarFieldEnum], {nullable:false})
    by!: Array<`${Chats_beckerScalarFieldEnum}`>;

    @Field(() => chats_beckerScalarWhereWithAggregatesInput, {nullable:true})
    having?: chats_beckerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
