import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutAgentTransactionInput } from './profile-update-without-agent-transaction.input';

@InputType()
export class ProfileUpdateToOneWithWhereWithoutAgentTransactionInput {

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;

    @Field(() => ProfileUpdateWithoutAgentTransactionInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutAgentTransactionInput)
    data!: ProfileUpdateWithoutAgentTransactionInput;
}
