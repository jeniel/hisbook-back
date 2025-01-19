import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentTransactionCreateWithoutTicketInput } from './agent-transaction-create-without-ticket.input';
import { Type } from 'class-transformer';
import { AgentTransactionCreateOrConnectWithoutTicketInput } from './agent-transaction-create-or-connect-without-ticket.input';
import { AgentTransactionCreateManyTicketInputEnvelope } from './agent-transaction-create-many-ticket-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AgentTransactionWhereUniqueInput } from './agent-transaction-where-unique.input';

@InputType()
export class AgentTransactionUncheckedCreateNestedManyWithoutTicketInput {

    @Field(() => [AgentTransactionCreateWithoutTicketInput], {nullable:true})
    @Type(() => AgentTransactionCreateWithoutTicketInput)
    create?: Array<AgentTransactionCreateWithoutTicketInput>;

    @Field(() => [AgentTransactionCreateOrConnectWithoutTicketInput], {nullable:true})
    @Type(() => AgentTransactionCreateOrConnectWithoutTicketInput)
    connectOrCreate?: Array<AgentTransactionCreateOrConnectWithoutTicketInput>;

    @Field(() => AgentTransactionCreateManyTicketInputEnvelope, {nullable:true})
    @Type(() => AgentTransactionCreateManyTicketInputEnvelope)
    createMany?: AgentTransactionCreateManyTicketInputEnvelope;

    @Field(() => [AgentTransactionWhereUniqueInput], {nullable:true})
    @Type(() => AgentTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AgentTransactionWhereUniqueInput, 'id'>>;
}
