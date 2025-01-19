import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentTransactionCreateManyTicketInput } from './agent-transaction-create-many-ticket.input';
import { Type } from 'class-transformer';

@InputType()
export class AgentTransactionCreateManyTicketInputEnvelope {

    @Field(() => [AgentTransactionCreateManyTicketInput], {nullable:false})
    @Type(() => AgentTransactionCreateManyTicketInput)
    data!: Array<AgentTransactionCreateManyTicketInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
