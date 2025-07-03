import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Chats_beckerSumAggregate {

    @Field(() => String, {nullable:true})
    id?: bigint | number;
}
