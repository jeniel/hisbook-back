import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_callinboundWhereInput } from '../chats-callinbound/chats-callinbound-where.input';
import { Type } from 'class-transformer';
import { chats_callinboundOrderByWithAggregationInput } from '../chats-callinbound/chats-callinbound-order-by-with-aggregation.input';
import { Chats_callinboundScalarFieldEnum } from './chats-callinbound-scalar-field.enum';
import { chats_callinboundScalarWhereWithAggregatesInput } from '../chats-callinbound/chats-callinbound-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBychatsCallinboundArgs {

    @Field(() => chats_callinboundWhereInput, {nullable:true})
    @Type(() => chats_callinboundWhereInput)
    where?: chats_callinboundWhereInput;

    @Field(() => [chats_callinboundOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<chats_callinboundOrderByWithAggregationInput>;

    @Field(() => [Chats_callinboundScalarFieldEnum], {nullable:false})
    by!: Array<`${Chats_callinboundScalarFieldEnum}`>;

    @Field(() => chats_callinboundScalarWhereWithAggregatesInput, {nullable:true})
    having?: chats_callinboundScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
