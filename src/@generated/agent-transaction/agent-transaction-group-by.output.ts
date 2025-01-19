import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AgentTransactionCountAggregate } from './agent-transaction-count-aggregate.output';
import { AgentTransactionMinAggregate } from './agent-transaction-min-aggregate.output';
import { AgentTransactionMaxAggregate } from './agent-transaction-max-aggregate.output';

@ObjectType()
export class AgentTransactionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    ticketTransactionId?: string;

    @Field(() => String, {nullable:true})
    profileId?: string;

    @Field(() => AgentTransactionCountAggregate, {nullable:true})
    _count?: AgentTransactionCountAggregate;

    @Field(() => AgentTransactionMinAggregate, {nullable:true})
    _min?: AgentTransactionMinAggregate;

    @Field(() => AgentTransactionMaxAggregate, {nullable:true})
    _max?: AgentTransactionMaxAggregate;
}
