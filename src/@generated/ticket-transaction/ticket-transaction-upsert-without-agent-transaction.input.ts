import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionUpdateWithoutAgentTransactionInput } from './ticket-transaction-update-without-agent-transaction.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateWithoutAgentTransactionInput } from './ticket-transaction-create-without-agent-transaction.input';
import { TicketTransactionWhereInput } from './ticket-transaction-where.input';

@InputType()
export class TicketTransactionUpsertWithoutAgentTransactionInput {

    @Field(() => TicketTransactionUpdateWithoutAgentTransactionInput, {nullable:false})
    @Type(() => TicketTransactionUpdateWithoutAgentTransactionInput)
    update!: TicketTransactionUpdateWithoutAgentTransactionInput;

    @Field(() => TicketTransactionCreateWithoutAgentTransactionInput, {nullable:false})
    @Type(() => TicketTransactionCreateWithoutAgentTransactionInput)
    create!: TicketTransactionCreateWithoutAgentTransactionInput;

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    @Type(() => TicketTransactionWhereInput)
    where?: TicketTransactionWhereInput;
}
