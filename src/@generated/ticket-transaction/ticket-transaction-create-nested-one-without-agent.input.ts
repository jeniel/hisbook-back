import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutAgentInput } from './ticket-transaction-create-without-agent.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutAgentInput } from './ticket-transaction-create-or-connect-without-agent.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';

@InputType()
export class TicketTransactionCreateNestedOneWithoutAgentInput {

    @Field(() => TicketTransactionCreateWithoutAgentInput, {nullable:true})
    @Type(() => TicketTransactionCreateWithoutAgentInput)
    create?: TicketTransactionCreateWithoutAgentInput;

    @Field(() => TicketTransactionCreateOrConnectWithoutAgentInput, {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutAgentInput)
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutAgentInput;

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;
}
