import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentTransactionUpdateManyMutationInput } from './agent-transaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AgentTransactionWhereInput } from './agent-transaction-where.input';

@ArgsType()
export class UpdateManyAgentTransactionArgs {

    @Field(() => AgentTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => AgentTransactionUpdateManyMutationInput)
    data!: AgentTransactionUpdateManyMutationInput;

    @Field(() => AgentTransactionWhereInput, {nullable:true})
    @Type(() => AgentTransactionWhereInput)
    where?: AgentTransactionWhereInput;
}
