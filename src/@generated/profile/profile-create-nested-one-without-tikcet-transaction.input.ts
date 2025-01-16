import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutTikcetTransactionInput } from './profile-create-without-tikcet-transaction.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutTikcetTransactionInput } from './profile-create-or-connect-without-tikcet-transaction.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutTikcetTransactionInput {

    @Field(() => ProfileCreateWithoutTikcetTransactionInput, {nullable:true})
    @Type(() => ProfileCreateWithoutTikcetTransactionInput)
    create?: ProfileCreateWithoutTikcetTransactionInput;

    @Field(() => ProfileCreateOrConnectWithoutTikcetTransactionInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutTikcetTransactionInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutTikcetTransactionInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
}
