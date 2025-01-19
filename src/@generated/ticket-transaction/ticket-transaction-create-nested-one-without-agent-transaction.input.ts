import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutAgentTransactionInput } from './ticket-transaction-create-without-agent-transaction.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutAgentTransactionInput } from './ticket-transaction-create-or-connect-without-agent-transaction.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';

@InputType()
export class TicketTransactionCreateNestedOneWithoutAgentTransactionInput {

    @Field(() => TicketTransactionCreateWithoutAgentTransactionInput, {nullable:true})
    @Type(() => TicketTransactionCreateWithoutAgentTransactionInput)
    create?: TicketTransactionCreateWithoutAgentTransactionInput;

    @Field(() => TicketTransactionCreateOrConnectWithoutAgentTransactionInput, {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutAgentTransactionInput)
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutAgentTransactionInput;

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;
}
