import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TicketTransactionCount {

    @Field(() => Int, {nullable:false})
    comment?: number;
}
