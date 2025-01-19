import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentTransactionUpdateInput } from './agent-transaction-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AgentTransactionWhereUniqueInput } from './agent-transaction-where-unique.input';

@ArgsType()
export class UpdateOneAgentTransactionArgs {

    @Field(() => AgentTransactionUpdateInput, {nullable:false})
    @Type(() => AgentTransactionUpdateInput)
    data!: AgentTransactionUpdateInput;

    @Field(() => AgentTransactionWhereUniqueInput, {nullable:false})
    @Type(() => AgentTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<AgentTransactionWhereUniqueInput, 'id'>;
}
