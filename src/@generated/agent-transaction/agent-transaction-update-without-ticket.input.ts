import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProfileUpdateOneWithoutAgentTransactionNestedInput } from '../profile/profile-update-one-without-agent-transaction-nested.input';

@InputType()
export class AgentTransactionUpdateWithoutTicketInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => ProfileUpdateOneWithoutAgentTransactionNestedInput, {nullable:true})
    profile?: ProfileUpdateOneWithoutAgentTransactionNestedInput;
}
