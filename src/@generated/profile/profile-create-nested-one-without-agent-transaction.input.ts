import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutAgentTransactionInput } from './profile-create-without-agent-transaction.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutAgentTransactionInput } from './profile-create-or-connect-without-agent-transaction.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutAgentTransactionInput {

    @Field(() => ProfileCreateWithoutAgentTransactionInput, {nullable:true})
    @Type(() => ProfileCreateWithoutAgentTransactionInput)
    create?: ProfileCreateWithoutAgentTransactionInput;

    @Field(() => ProfileCreateOrConnectWithoutAgentTransactionInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutAgentTransactionInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutAgentTransactionInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
}
