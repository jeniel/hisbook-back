import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TicketAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    seq?: true;
}
