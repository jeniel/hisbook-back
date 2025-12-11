import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TicketSumAggregate {

    @Field(() => Int, {nullable:true})
    seq?: number;
}
