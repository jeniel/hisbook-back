import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgentTransactionCreateManyInput } from './agent-transaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAgentTransactionArgs {

    @Field(() => [AgentTransactionCreateManyInput], {nullable:false})
    @Type(() => AgentTransactionCreateManyInput)
    data!: Array<AgentTransactionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
