import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionUpdateWithoutAgentInput } from './ticket-transaction-update-without-agent.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateWithoutAgentInput } from './ticket-transaction-create-without-agent.input';
import { TicketTransactionWhereInput } from './ticket-transaction-where.input';

@InputType()
export class TicketTransactionUpsertWithoutAgentInput {

    @Field(() => TicketTransactionUpdateWithoutAgentInput, {nullable:false})
    @Type(() => TicketTransactionUpdateWithoutAgentInput)
    update!: TicketTransactionUpdateWithoutAgentInput;

    @Field(() => TicketTransactionCreateWithoutAgentInput, {nullable:false})
    @Type(() => TicketTransactionCreateWithoutAgentInput)
    create!: TicketTransactionCreateWithoutAgentInput;

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    @Type(() => TicketTransactionWhereInput)
    where?: TicketTransactionWhereInput;
}
