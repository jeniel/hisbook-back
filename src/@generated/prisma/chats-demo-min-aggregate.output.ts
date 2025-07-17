import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Chats_demoMinAggregate {

    @Field(() => String, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:true})
    session_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
