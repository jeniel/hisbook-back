import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AgentTransactionWhereUniqueInput } from './agent-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { AgentTransactionUpdateWithoutTicketInput } from './agent-transaction-update-without-ticket.input';
import { AgentTransactionCreateWithoutTicketInput } from './agent-transaction-create-without-ticket.input';

@InputType()
export class AgentTransactionUpsertWithWhereUniqueWithoutTicketInput {

    @Field(() => AgentTransactionWhereUniqueInput, {nullable:false})
    @Type(() => AgentTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<AgentTransactionWhereUniqueInput, 'id'>;

    @Field(() => AgentTransactionUpdateWithoutTicketInput, {nullable:false})
    @Type(() => AgentTransactionUpdateWithoutTicketInput)
    update!: AgentTransactionUpdateWithoutTicketInput;

    @Field(() => AgentTransactionCreateWithoutTicketInput, {nullable:false})
    @Type(() => AgentTransactionCreateWithoutTicketInput)
    create!: AgentTransactionCreateWithoutTicketInput;
}
