import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class N8n_chat_historiesSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;
}
