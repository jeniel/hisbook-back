import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentTransactionCreateManyProfileInput } from './agent-transaction-create-many-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class AgentTransactionCreateManyProfileInputEnvelope {

    @Field(() => [AgentTransactionCreateManyProfileInput], {nullable:false})
    @Type(() => AgentTransactionCreateManyProfileInput)
    data!: Array<AgentTransactionCreateManyProfileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
