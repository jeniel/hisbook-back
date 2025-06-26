import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_demoWhereInput } from '../chats-demo/chats-demo-where.input';
import { Type } from 'class-transformer';
import { chats_demoOrderByWithAggregationInput } from '../chats-demo/chats-demo-order-by-with-aggregation.input';
import { Chats_demoScalarFieldEnum } from './chats-demo-scalar-field.enum';
import { chats_demoScalarWhereWithAggregatesInput } from '../chats-demo/chats-demo-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBychatsDemoArgs {

    @Field(() => chats_demoWhereInput, {nullable:true})
    @Type(() => chats_demoWhereInput)
    where?: chats_demoWhereInput;

    @Field(() => [chats_demoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<chats_demoOrderByWithAggregationInput>;

    @Field(() => [Chats_demoScalarFieldEnum], {nullable:false})
    by!: Array<`${Chats_demoScalarFieldEnum}`>;

    @Field(() => chats_demoScalarWhereWithAggregatesInput, {nullable:true})
    having?: chats_demoScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
