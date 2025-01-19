import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateNestedOneWithoutAgentInput } from '../ticket-transaction/ticket-transaction-create-nested-one-without-agent.input';

@InputType()
export class AgentTransactionCreateWithoutProfileInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TicketTransactionCreateNestedOneWithoutAgentInput, {nullable:true})
    ticket?: TicketTransactionCreateNestedOneWithoutAgentInput;
}
