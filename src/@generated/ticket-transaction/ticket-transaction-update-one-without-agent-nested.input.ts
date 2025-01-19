import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutAgentInput } from './ticket-transaction-create-without-agent.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutAgentInput } from './ticket-transaction-create-or-connect-without-agent.input';
import { TicketTransactionUpsertWithoutAgentInput } from './ticket-transaction-upsert-without-agent.input';
import { TicketTransactionWhereInput } from './ticket-transaction-where.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { TicketTransactionUpdateToOneWithWhereWithoutAgentInput } from './ticket-transaction-update-to-one-with-where-without-agent.input';

@InputType()
export class TicketTransactionUpdateOneWithoutAgentNestedInput {

    @Field(() => TicketTransactionCreateWithoutAgentInput, {nullable:true})
    @Type(() => TicketTransactionCreateWithoutAgentInput)
    create?: TicketTransactionCreateWithoutAgentInput;

    @Field(() => TicketTransactionCreateOrConnectWithoutAgentInput, {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutAgentInput)
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutAgentInput;

    @Field(() => TicketTransactionUpsertWithoutAgentInput, {nullable:true})
    @Type(() => TicketTransactionUpsertWithoutAgentInput)
    upsert?: TicketTransactionUpsertWithoutAgentInput;

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    @Type(() => TicketTransactionWhereInput)
    disconnect?: TicketTransactionWhereInput;

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    @Type(() => TicketTransactionWhereInput)
    delete?: TicketTransactionWhereInput;

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

    @Field(() => TicketTransactionUpdateToOneWithWhereWithoutAgentInput, {nullable:true})
    @Type(() => TicketTransactionUpdateToOneWithWhereWithoutAgentInput)
    update?: TicketTransactionUpdateToOneWithWhereWithoutAgentInput;
}
