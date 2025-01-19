import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TicketTransactionUpdateOneWithoutAgentNestedInput } from '../ticket-transaction/ticket-transaction-update-one-without-agent-nested.input';

@InputType()
export class AgentTransactionUpdateWithoutProfileInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => TicketTransactionUpdateOneWithoutAgentNestedInput, {nullable:true})
    ticket?: TicketTransactionUpdateOneWithoutAgentNestedInput;
}
