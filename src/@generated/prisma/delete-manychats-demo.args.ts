import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_demoWhereInput } from '../chats-demo/chats-demo-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManychatsDemoArgs {

    @Field(() => chats_demoWhereInput, {nullable:true})
    @Type(() => chats_demoWhereInput)
    where?: chats_demoWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
