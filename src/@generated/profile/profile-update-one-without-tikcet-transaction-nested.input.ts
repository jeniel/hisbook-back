import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutTikcetTransactionInput } from './profile-create-without-tikcet-transaction.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutTikcetTransactionInput } from './profile-create-or-connect-without-tikcet-transaction.input';
import { ProfileUpsertWithoutTikcetTransactionInput } from './profile-upsert-without-tikcet-transaction.input';
import { ProfileWhereInput } from './profile-where.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateToOneWithWhereWithoutTikcetTransactionInput } from './profile-update-to-one-with-where-without-tikcet-transaction.input';

@InputType()
export class ProfileUpdateOneWithoutTikcetTransactionNestedInput {

    @Field(() => ProfileCreateWithoutTikcetTransactionInput, {nullable:true})
    @Type(() => ProfileCreateWithoutTikcetTransactionInput)
    create?: ProfileCreateWithoutTikcetTransactionInput;

    @Field(() => ProfileCreateOrConnectWithoutTikcetTransactionInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutTikcetTransactionInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutTikcetTransactionInput;

    @Field(() => ProfileUpsertWithoutTikcetTransactionInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutTikcetTransactionInput)
    upsert?: ProfileUpsertWithoutTikcetTransactionInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    disconnect?: ProfileWhereInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    delete?: ProfileWhereInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileUpdateToOneWithWhereWithoutTikcetTransactionInput, {nullable:true})
    @Type(() => ProfileUpdateToOneWithWhereWithoutTikcetTransactionInput)
    update?: ProfileUpdateToOneWithWhereWithoutTikcetTransactionInput;
}
