import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgentTransactionCreateWithoutProfileInput } from './agent-transaction-create-without-profile.input';
import { Type } from 'class-transformer';
import { AgentTransactionCreateOrConnectWithoutProfileInput } from './agent-transaction-create-or-connect-without-profile.input';
import { AgentTransactionUpsertWithWhereUniqueWithoutProfileInput } from './agent-transaction-upsert-with-where-unique-without-profile.input';
import { AgentTransactionCreateManyProfileInputEnvelope } from './agent-transaction-create-many-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AgentTransactionWhereUniqueInput } from './agent-transaction-where-unique.input';
import { AgentTransactionUpdateWithWhereUniqueWithoutProfileInput } from './agent-transaction-update-with-where-unique-without-profile.input';
import { AgentTransactionUpdateManyWithWhereWithoutProfileInput } from './agent-transaction-update-many-with-where-without-profile.input';
import { AgentTransactionScalarWhereInput } from './agent-transaction-scalar-where.input';

@InputType()
export class AgentTransactionUpdateManyWithoutProfileNestedInput {

    @Field(() => [AgentTransactionCreateWithoutProfileInput], {nullable:true})
    @Type(() => AgentTransactionCreateWithoutProfileInput)
    create?: Array<AgentTransactionCreateWithoutProfileInput>;

    @Field(() => [AgentTransactionCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => AgentTransactionCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<AgentTransactionCreateOrConnectWithoutProfileInput>;

    @Field(() => [AgentTransactionUpsertWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => AgentTransactionUpsertWithWhereUniqueWithoutProfileInput)
    upsert?: Array<AgentTransactionUpsertWithWhereUniqueWithoutProfileInput>;

    @Field(() => AgentTransactionCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => AgentTransactionCreateManyProfileInputEnvelope)
    createMany?: AgentTransactionCreateManyProfileInputEnvelope;

    @Field(() => [AgentTransactionWhereUniqueInput], {nullable:true})
    @Type(() => AgentTransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AgentTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [AgentTransactionWhereUniqueInput], {nullable:true})
    @Type(() => AgentTransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AgentTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [AgentTransactionWhereUniqueInput], {nullable:true})
    @Type(() => AgentTransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AgentTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [AgentTransactionWhereUniqueInput], {nullable:true})
    @Type(() => AgentTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AgentTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [AgentTransactionUpdateWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => AgentTransactionUpdateWithWhereUniqueWithoutProfileInput)
    update?: Array<AgentTransactionUpdateWithWhereUniqueWithoutProfileInput>;

    @Field(() => [AgentTransactionUpdateManyWithWhereWithoutProfileInput], {nullable:true})
    @Type(() => AgentTransactionUpdateManyWithWhereWithoutProfileInput)
    updateMany?: Array<AgentTransactionUpdateManyWithWhereWithoutProfileInput>;

    @Field(() => [AgentTransactionScalarWhereInput], {nullable:true})
    @Type(() => AgentTransactionScalarWhereInput)
    deleteMany?: Array<AgentTransactionScalarWhereInput>;
}
