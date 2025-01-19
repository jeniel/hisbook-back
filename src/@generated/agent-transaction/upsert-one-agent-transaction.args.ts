import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AgentTransactionWhereUniqueInput } from './agent-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { AgentTransactionCreateInput } from './agent-transaction-create.input';
import { AgentTransactionUpdateInput } from './agent-transaction-update.input';

@ArgsType()
export class UpsertOneAgentTransactionArgs {

    @Field(() => AgentTransactionWhereUniqueInput, {nullable:false})
    @Type(() => AgentTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<AgentTransactionWhereUniqueInput, 'id'>;

    @Field(() => AgentTransactionCreateInput, {nullable:false})
    @Type(() => AgentTransactionCreateInput)
    create!: AgentTransactionCreateInput;

    @Field(() => AgentTransactionUpdateInput, {nullable:false})
    @Type(() => AgentTransactionUpdateInput)
    update!: AgentTransactionUpdateInput;
}
