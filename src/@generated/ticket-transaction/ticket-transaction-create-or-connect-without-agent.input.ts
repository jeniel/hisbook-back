import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateWithoutAgentInput } from './ticket-transaction-create-without-agent.input';

@InputType()
export class TicketTransactionCreateOrConnectWithoutAgentInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

    @Field(() => TicketTransactionCreateWithoutAgentInput, {nullable:false})
    @Type(() => TicketTransactionCreateWithoutAgentInput)
    create!: TicketTransactionCreateWithoutAgentInput;
}
