import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutAgentTransactionInput } from './profile-create-without-agent-transaction.input';

@InputType()
export class ProfileCreateOrConnectWithoutAgentTransactionInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileCreateWithoutAgentTransactionInput, {nullable:false})
    @Type(() => ProfileCreateWithoutAgentTransactionInput)
    create!: ProfileCreateWithoutAgentTransactionInput;
}
