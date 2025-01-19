import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutTicketTransactionInput } from './profile-update-without-ticket-transaction.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutTicketTransactionInput } from './profile-create-without-ticket-transaction.input';
import { ProfileWhereInput } from './profile-where.input';

@InputType()
export class ProfileUpsertWithoutTicketTransactionInput {

    @Field(() => ProfileUpdateWithoutTicketTransactionInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutTicketTransactionInput)
    update!: ProfileUpdateWithoutTicketTransactionInput;

    @Field(() => ProfileCreateWithoutTicketTransactionInput, {nullable:false})
    @Type(() => ProfileCreateWithoutTicketTransactionInput)
    create!: ProfileCreateWithoutTicketTransactionInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;
}
