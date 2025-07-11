import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Chats_callinboundAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;
}
