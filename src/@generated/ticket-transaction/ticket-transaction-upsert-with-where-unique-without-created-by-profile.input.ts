import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionUpdateWithoutCreatedByProfileInput } from './ticket-transaction-update-without-created-by-profile.input';
import { TicketTransactionCreateWithoutCreatedByProfileInput } from './ticket-transaction-create-without-created-by-profile.input';

@InputType()
export class TicketTransactionUpsertWithWhereUniqueWithoutCreatedByProfileInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>;

    @Field(() => TicketTransactionUpdateWithoutCreatedByProfileInput, {nullable:false})
    @Type(() => TicketTransactionUpdateWithoutCreatedByProfileInput)
    update!: TicketTransactionUpdateWithoutCreatedByProfileInput;

    @Field(() => TicketTransactionCreateWithoutCreatedByProfileInput, {nullable:false})
    @Type(() => TicketTransactionCreateWithoutCreatedByProfileInput)
    create!: TicketTransactionCreateWithoutCreatedByProfileInput;
}
