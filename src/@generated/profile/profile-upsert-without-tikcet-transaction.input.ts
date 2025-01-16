import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutTikcetTransactionInput } from './profile-update-without-tikcet-transaction.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutTikcetTransactionInput } from './profile-create-without-tikcet-transaction.input';
import { ProfileWhereInput } from './profile-where.input';

@InputType()
export class ProfileUpsertWithoutTikcetTransactionInput {

    @Field(() => ProfileUpdateWithoutTikcetTransactionInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutTikcetTransactionInput)
    update!: ProfileUpdateWithoutTikcetTransactionInput;

    @Field(() => ProfileCreateWithoutTikcetTransactionInput, {nullable:false})
    @Type(() => ProfileCreateWithoutTikcetTransactionInput)
    create!: ProfileCreateWithoutTikcetTransactionInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;
}
