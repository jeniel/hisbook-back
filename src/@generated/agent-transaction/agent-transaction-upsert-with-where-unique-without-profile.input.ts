import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AgentTransactionWhereUniqueInput } from './agent-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { AgentTransactionUpdateWithoutProfileInput } from './agent-transaction-update-without-profile.input';
import { AgentTransactionCreateWithoutProfileInput } from './agent-transaction-create-without-profile.input';

@InputType()
export class AgentTransactionUpsertWithWhereUniqueWithoutProfileInput {

    @Field(() => AgentTransactionWhereUniqueInput, {nullable:false})
    @Type(() => AgentTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<AgentTransactionWhereUniqueInput, 'id'>;

    @Field(() => AgentTransactionUpdateWithoutProfileInput, {nullable:false})
    @Type(() => AgentTransactionUpdateWithoutProfileInput)
    update!: AgentTransactionUpdateWithoutProfileInput;

    @Field(() => AgentTransactionCreateWithoutProfileInput, {nullable:false})
    @Type(() => AgentTransactionCreateWithoutProfileInput)
    create!: AgentTransactionCreateWithoutProfileInput;
}
