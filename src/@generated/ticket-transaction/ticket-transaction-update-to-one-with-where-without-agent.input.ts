import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionWhereInput } from './ticket-transaction-where.input';
import { Type } from 'class-transformer';
import { TicketTransactionUpdateWithoutAgentInput } from './ticket-transaction-update-without-agent.input';

@InputType()
export class TicketTransactionUpdateToOneWithWhereWithoutAgentInput {

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    @Type(() => TicketTransactionWhereInput)
    where?: TicketTransactionWhereInput;

    @Field(() => TicketTransactionUpdateWithoutAgentInput, {nullable:false})
    @Type(() => TicketTransactionUpdateWithoutAgentInput)
    data!: TicketTransactionUpdateWithoutAgentInput;
}
