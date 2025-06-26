import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_demoWhereInput } from '../chats-demo/chats-demo-where.input';
import { Type } from 'class-transformer';
import { chats_demoOrderByWithRelationInput } from '../chats-demo/chats-demo-order-by-with-relation.input';
import { chats_demoWhereUniqueInput } from '../chats-demo/chats-demo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Chats_demoScalarFieldEnum } from './chats-demo-scalar-field.enum';

@ArgsType()
export class FindManychatsDemoArgs {

    @Field(() => chats_demoWhereInput, {nullable:true})
    @Type(() => chats_demoWhereInput)
    where?: chats_demoWhereInput;

    @Field(() => [chats_demoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<chats_demoOrderByWithRelationInput>;

    @Field(() => chats_demoWhereUniqueInput, {nullable:true})
    cursor?: chats_demoWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Chats_demoScalarFieldEnum], {nullable:true})
    distinct?: Array<`${Chats_demoScalarFieldEnum}`>;
}
