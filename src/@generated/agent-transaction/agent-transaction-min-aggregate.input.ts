import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AgentTransactionMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    ticketTransactionId?: true;

    @Field(() => Boolean, {nullable:true})
    profileId?: true;
}
