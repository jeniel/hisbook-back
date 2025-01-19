import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentTransactionCreateWithoutTicketInput } from './agent-transaction-create-without-ticket.input';
import { Type } from 'class-transformer';
import { AgentTransactionCreateOrConnectWithoutTicketInput } from './agent-transaction-create-or-connect-without-ticket.input';
import { AgentTransactionUpsertWithWhereUniqueWithoutTicketInput } from './agent-transaction-upsert-with-where-unique-without-ticket.input';
import { AgentTransactionCreateManyTicketInputEnvelope } from './agent-transaction-create-many-ticket-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AgentTransactionWhereUniqueInput } from './agent-transaction-where-unique.input';
import { AgentTransactionUpdateWithWhereUniqueWithoutTicketInput } from './agent-transaction-update-with-where-unique-without-ticket.input';
import { AgentTransactionUpdateManyWithWhereWithoutTicketInput } from './agent-transaction-update-many-with-where-without-ticket.input';
import { AgentTransactionScalarWhereInput } from './agent-transaction-scalar-where.input';

@InputType()
export class AgentTransactionUpdateManyWithoutTicketNestedInput {

    @Field(() => [AgentTransactionCreateWithoutTicketInput], {nullable:true})
    @Type(() => AgentTransactionCreateWithoutTicketInput)
    create?: Array<AgentTransactionCreateWithoutTicketInput>;

    @Field(() => [AgentTransactionCreateOrConnectWithoutTicketInput], {nullable:true})
    @Type(() => AgentTransactionCreateOrConnectWithoutTicketInput)
    connectOrCreate?: Array<AgentTransactionCreateOrConnectWithoutTicketInput>;

    @Field(() => [AgentTransactionUpsertWithWhereUniqueWithoutTicketInput], {nullable:true})
    @Type(() => AgentTransactionUpsertWithWhereUniqueWithoutTicketInput)
    upsert?: Array<AgentTransactionUpsertWithWhereUniqueWithoutTicketInput>;

    @Field(() => AgentTransactionCreateManyTicketInputEnvelope, {nullable:true})
    @Type(() => AgentTransactionCreateManyTicketInputEnvelope)
    createMany?: AgentTransactionCreateManyTicketInputEnvelope;

    @Field(() => [AgentTransactionWhereUniqueInput], {nullable:true})
    @Type(() => AgentTransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AgentTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [AgentTransactionWhereUniqueInput], {nullable:true})
    @Type(() => AgentTransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AgentTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [AgentTransactionWhereUniqueInput], {nullable:true})
    @Type(() => AgentTransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AgentTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [AgentTransactionWhereUniqueInput], {nullable:true})
    @Type(() => AgentTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AgentTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [AgentTransactionUpdateWithWhereUniqueWithoutTicketInput], {nullable:true})
    @Type(() => AgentTransactionUpdateWithWhereUniqueWithoutTicketInput)
    update?: Array<AgentTransactionUpdateWithWhereUniqueWithoutTicketInput>;

    @Field(() => [AgentTransactionUpdateManyWithWhereWithoutTicketInput], {nullable:true})
    @Type(() => AgentTransactionUpdateManyWithWhereWithoutTicketInput)
    updateMany?: Array<AgentTransactionUpdateManyWithWhereWithoutTicketInput>;

    @Field(() => [AgentTransactionScalarWhereInput], {nullable:true})
    @Type(() => AgentTransactionScalarWhereInput)
    deleteMany?: Array<AgentTransactionScalarWhereInput>;
}
