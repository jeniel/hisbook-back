import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AgentTransactionMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    ticketTransactionId?: string;

    @Field(() => String, {nullable:true})
    profileId?: string;
}
