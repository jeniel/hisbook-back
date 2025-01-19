import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedOneWithoutAgentTransactionInput } from '../profile/profile-create-nested-one-without-agent-transaction.input';

@InputType()
export class AgentTransactionCreateWithoutTicketInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ProfileCreateNestedOneWithoutAgentTransactionInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutAgentTransactionInput;
}
