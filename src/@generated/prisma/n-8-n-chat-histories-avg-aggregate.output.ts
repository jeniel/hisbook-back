import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class N8n_chat_historiesAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;
}
