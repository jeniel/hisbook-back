import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutAgentTransactionInput } from './profile-create-without-agent-transaction.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutAgentTransactionInput } from './profile-create-or-connect-without-agent-transaction.input';
import { ProfileUpsertWithoutAgentTransactionInput } from './profile-upsert-without-agent-transaction.input';
import { ProfileWhereInput } from './profile-where.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateToOneWithWhereWithoutAgentTransactionInput } from './profile-update-to-one-with-where-without-agent-transaction.input';

@InputType()
export class ProfileUpdateOneWithoutAgentTransactionNestedInput {

    @Field(() => ProfileCreateWithoutAgentTransactionInput, {nullable:true})
    @Type(() => ProfileCreateWithoutAgentTransactionInput)
    create?: ProfileCreateWithoutAgentTransactionInput;

    @Field(() => ProfileCreateOrConnectWithoutAgentTransactionInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutAgentTransactionInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutAgentTransactionInput;

    @Field(() => ProfileUpsertWithoutAgentTransactionInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutAgentTransactionInput)
    upsert?: ProfileUpsertWithoutAgentTransactionInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    disconnect?: ProfileWhereInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    delete?: ProfileWhereInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileUpdateToOneWithWhereWithoutAgentTransactionInput, {nullable:true})
    @Type(() => ProfileUpdateToOneWithWhereWithoutAgentTransactionInput)
    update?: ProfileUpdateToOneWithWhereWithoutAgentTransactionInput;
}
