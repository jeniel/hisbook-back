import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentTransactionScalarWhereInput } from './agent-transaction-scalar-where.input';
import { Type } from 'class-transformer';
import { AgentTransactionUpdateManyMutationInput } from './agent-transaction-update-many-mutation.input';

@InputType()
export class AgentTransactionUpdateManyWithWhereWithoutProfileInput {

    @Field(() => AgentTransactionScalarWhereInput, {nullable:false})
    @Type(() => AgentTransactionScalarWhereInput)
    where!: AgentTransactionScalarWhereInput;

    @Field(() => AgentTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => AgentTransactionUpdateManyMutationInput)
    data!: AgentTransactionUpdateManyMutationInput;
}
