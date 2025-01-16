import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutTikcetTransactionInput } from './profile-update-without-tikcet-transaction.input';

@InputType()
export class ProfileUpdateToOneWithWhereWithoutTikcetTransactionInput {

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;

    @Field(() => ProfileUpdateWithoutTikcetTransactionInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutTikcetTransactionInput)
    data!: ProfileUpdateWithoutTikcetTransactionInput;
}
