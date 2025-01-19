import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionWhereInput } from './ticket-transaction-where.input';
import { Type } from 'class-transformer';
import { TicketTransactionUpdateWithoutAgentTransactionInput } from './ticket-transaction-update-without-agent-transaction.input';

@InputType()
export class TicketTransactionUpdateToOneWithWhereWithoutAgentTransactionInput {

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    @Type(() => TicketTransactionWhereInput)
    where?: TicketTransactionWhereInput;

    @Field(() => TicketTransactionUpdateWithoutAgentTransactionInput, {nullable:false})
    @Type(() => TicketTransactionUpdateWithoutAgentTransactionInput)
    data!: TicketTransactionUpdateWithoutAgentTransactionInput;
}
