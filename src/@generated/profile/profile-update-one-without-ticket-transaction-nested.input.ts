import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutTicketTransactionInput } from './profile-create-without-ticket-transaction.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutTicketTransactionInput } from './profile-create-or-connect-without-ticket-transaction.input';
import { ProfileUpsertWithoutTicketTransactionInput } from './profile-upsert-without-ticket-transaction.input';
import { ProfileWhereInput } from './profile-where.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateToOneWithWhereWithoutTicketTransactionInput } from './profile-update-to-one-with-where-without-ticket-transaction.input';

@InputType()
export class ProfileUpdateOneWithoutTicketTransactionNestedInput {

    @Field(() => ProfileCreateWithoutTicketTransactionInput, {nullable:true})
    @Type(() => ProfileCreateWithoutTicketTransactionInput)
    create?: ProfileCreateWithoutTicketTransactionInput;

    @Field(() => ProfileCreateOrConnectWithoutTicketTransactionInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutTicketTransactionInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutTicketTransactionInput;

    @Field(() => ProfileUpsertWithoutTicketTransactionInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutTicketTransactionInput)
    upsert?: ProfileUpsertWithoutTicketTransactionInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    disconnect?: ProfileWhereInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    delete?: ProfileWhereInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileUpdateToOneWithWhereWithoutTicketTransactionInput, {nullable:true})
    @Type(() => ProfileUpdateToOneWithWhereWithoutTicketTransactionInput)
    update?: ProfileUpdateToOneWithWhereWithoutTicketTransactionInput;
}
