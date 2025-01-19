import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateNestedOneWithoutAgentInput } from '../ticket-transaction/ticket-transaction-create-nested-one-without-agent.input';
import { ProfileCreateNestedOneWithoutAgentTransactionInput } from '../profile/profile-create-nested-one-without-agent-transaction.input';

@InputType()
export class AgentTransactionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TicketTransactionCreateNestedOneWithoutAgentInput, {nullable:true})
    ticket?: TicketTransactionCreateNestedOneWithoutAgentInput;

    @Field(() => ProfileCreateNestedOneWithoutAgentTransactionInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutAgentTransactionInput;
}
