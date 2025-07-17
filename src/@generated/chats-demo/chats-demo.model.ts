import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class chats_demo {

    @Field(() => ID, {nullable:false})
    id!: bigint;

    @Field(() => String, {nullable:false})
    session_id!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    message!: any | null;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;
}
