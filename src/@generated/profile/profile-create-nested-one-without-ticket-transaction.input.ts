import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutTicketTransactionInput } from './profile-create-without-ticket-transaction.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutTicketTransactionInput } from './profile-create-or-connect-without-ticket-transaction.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutTicketTransactionInput {

    @Field(() => ProfileCreateWithoutTicketTransactionInput, {nullable:true})
    @Type(() => ProfileCreateWithoutTicketTransactionInput)
    create?: ProfileCreateWithoutTicketTransactionInput;

    @Field(() => ProfileCreateOrConnectWithoutTicketTransactionInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutTicketTransactionInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutTicketTransactionInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
}
