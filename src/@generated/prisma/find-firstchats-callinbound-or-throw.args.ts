import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_callinboundWhereInput } from '../chats-callinbound/chats-callinbound-where.input';
import { Type } from 'class-transformer';
import { chats_callinboundOrderByWithRelationInput } from '../chats-callinbound/chats-callinbound-order-by-with-relation.input';
import { chats_callinboundWhereUniqueInput } from '../chats-callinbound/chats-callinbound-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Chats_callinboundScalarFieldEnum } from './chats-callinbound-scalar-field.enum';

@ArgsType()
export class FindFirstchatsCallinboundOrThrowArgs {

    @Field(() => chats_callinboundWhereInput, {nullable:true})
    @Type(() => chats_callinboundWhereInput)
    where?: chats_callinboundWhereInput;

    @Field(() => [chats_callinboundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<chats_callinboundOrderByWithRelationInput>;

    @Field(() => chats_callinboundWhereUniqueInput, {nullable:true})
    cursor?: chats_callinboundWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Chats_callinboundScalarFieldEnum], {nullable:true})
    distinct?: Array<`${Chats_callinboundScalarFieldEnum}`>;
}
