import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Chat_beckerAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;
}
