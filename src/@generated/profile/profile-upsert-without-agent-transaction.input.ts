import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutAgentTransactionInput } from './profile-update-without-agent-transaction.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutAgentTransactionInput } from './profile-create-without-agent-transaction.input';
import { ProfileWhereInput } from './profile-where.input';

@InputType()
export class ProfileUpsertWithoutAgentTransactionInput {

    @Field(() => ProfileUpdateWithoutAgentTransactionInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutAgentTransactionInput)
    update!: ProfileUpdateWithoutAgentTransactionInput;

    @Field(() => ProfileCreateWithoutAgentTransactionInput, {nullable:false})
    @Type(() => ProfileCreateWithoutAgentTransactionInput)
    create!: ProfileCreateWithoutAgentTransactionInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;
}
