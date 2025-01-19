import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentTransactionWhereInput } from './agent-transaction-where.input';

@InputType()
export class AgentTransactionListRelationFilter {

    @Field(() => AgentTransactionWhereInput, {nullable:true})
    every?: AgentTransactionWhereInput;

    @Field(() => AgentTransactionWhereInput, {nullable:true})
    some?: AgentTransactionWhereInput;

    @Field(() => AgentTransactionWhereInput, {nullable:true})
    none?: AgentTransactionWhereInput;
}
