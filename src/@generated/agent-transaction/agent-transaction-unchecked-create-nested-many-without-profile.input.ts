import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentTransactionCreateWithoutProfileInput } from './agent-transaction-create-without-profile.input';
import { Type } from 'class-transformer';
import { AgentTransactionCreateOrConnectWithoutProfileInput } from './agent-transaction-create-or-connect-without-profile.input';
import { AgentTransactionCreateManyProfileInputEnvelope } from './agent-transaction-create-many-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AgentTransactionWhereUniqueInput } from './agent-transaction-where-unique.input';

@InputType()
export class AgentTransactionUncheckedCreateNestedManyWithoutProfileInput {

    @Field(() => [AgentTransactionCreateWithoutProfileInput], {nullable:true})
    @Type(() => AgentTransactionCreateWithoutProfileInput)
    create?: Array<AgentTransactionCreateWithoutProfileInput>;

    @Field(() => [AgentTransactionCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => AgentTransactionCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<AgentTransactionCreateOrConnectWithoutProfileInput>;

    @Field(() => AgentTransactionCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => AgentTransactionCreateManyProfileInputEnvelope)
    createMany?: AgentTransactionCreateManyProfileInputEnvelope;

    @Field(() => [AgentTransactionWhereUniqueInput], {nullable:true})
    @Type(() => AgentTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AgentTransactionWhereUniqueInput, 'id'>>;
}
