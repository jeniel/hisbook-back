import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentTransactionCreateInput } from './agent-transaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAgentTransactionArgs {

    @Field(() => AgentTransactionCreateInput, {nullable:true})
    @Type(() => AgentTransactionCreateInput)
    data?: AgentTransactionCreateInput;
}
