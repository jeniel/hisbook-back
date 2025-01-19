import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutTicketTransactionInput } from './profile-update-without-ticket-transaction.input';

@InputType()
export class ProfileUpdateToOneWithWhereWithoutTicketTransactionInput {

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;

    @Field(() => ProfileUpdateWithoutTicketTransactionInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutTicketTransactionInput)
    data!: ProfileUpdateWithoutTicketTransactionInput;
}
