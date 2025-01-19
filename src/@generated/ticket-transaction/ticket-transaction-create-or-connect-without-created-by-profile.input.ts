import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateWithoutCreatedByProfileInput } from './ticket-transaction-create-without-created-by-profile.input';

@InputType()
export class TicketTransactionCreateOrConnectWithoutCreatedByProfileInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

    @Field(() => TicketTransactionCreateWithoutCreatedByProfileInput, {nullable:false})
    @Type(() => TicketTransactionCreateWithoutCreatedByProfileInput)
    create!: TicketTransactionCreateWithoutCreatedByProfileInput;
}
