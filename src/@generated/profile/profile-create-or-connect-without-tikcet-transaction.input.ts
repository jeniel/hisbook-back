import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutTikcetTransactionInput } from './profile-create-without-tikcet-transaction.input';

@InputType()
export class ProfileCreateOrConnectWithoutTikcetTransactionInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileCreateWithoutTikcetTransactionInput, {nullable:false})
    @Type(() => ProfileCreateWithoutTikcetTransactionInput)
    create!: ProfileCreateWithoutTikcetTransactionInput;
}
