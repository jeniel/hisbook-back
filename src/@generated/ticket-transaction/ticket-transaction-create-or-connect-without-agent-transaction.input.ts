import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateWithoutAgentTransactionInput } from './ticket-transaction-create-without-agent-transaction.input';

@InputType()
export class TicketTransactionCreateOrConnectWithoutAgentTransactionInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

    @Field(() => TicketTransactionCreateWithoutAgentTransactionInput, {nullable:false})
    @Type(() => TicketTransactionCreateWithoutAgentTransactionInput)
    create!: TicketTransactionCreateWithoutAgentTransactionInput;
}
