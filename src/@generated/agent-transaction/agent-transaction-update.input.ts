import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TicketTransactionUpdateOneWithoutAgentNestedInput } from '../ticket-transaction/ticket-transaction-update-one-without-agent-nested.input';
import { ProfileUpdateOneWithoutAgentTransactionNestedInput } from '../profile/profile-update-one-without-agent-transaction-nested.input';

@InputType()
export class AgentTransactionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => TicketTransactionUpdateOneWithoutAgentNestedInput, {nullable:true})
    ticket?: TicketTransactionUpdateOneWithoutAgentNestedInput;

    @Field(() => ProfileUpdateOneWithoutAgentTransactionNestedInput, {nullable:true})
    profile?: ProfileUpdateOneWithoutAgentTransactionNestedInput;
}
