import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutTicketTransactionInput } from './profile-create-without-ticket-transaction.input';

@InputType()
export class ProfileCreateOrConnectWithoutTicketTransactionInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileCreateWithoutTicketTransactionInput, {nullable:false})
    @Type(() => ProfileCreateWithoutTicketTransactionInput)
    create!: ProfileCreateWithoutTicketTransactionInput;
}
