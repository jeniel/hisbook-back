import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TicketAvgAggregate {

    @Field(() => Float, {nullable:true})
    seq?: number;
}
