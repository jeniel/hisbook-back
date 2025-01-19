import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AgentTransactionCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    ticketTransactionId?: string;

    @Field(() => String, {nullable:true})
    profileId?: string;
}
