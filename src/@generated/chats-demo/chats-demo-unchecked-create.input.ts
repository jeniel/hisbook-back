import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class chats_demoUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:false})
    session_id!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    message?: any;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
