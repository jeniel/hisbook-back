import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentTransactionWhereInput } from './agent-transaction-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAgentTransactionArgs {

    @Field(() => AgentTransactionWhereInput, {nullable:true})
    @Type(() => AgentTransactionWhereInput)
    where?: AgentTransactionWhereInput;
}
