import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionUpdateWithoutAssignedByProfileInput } from './ticket-transaction-update-without-assigned-by-profile.input';
import { TicketTransactionCreateWithoutAssignedByProfileInput } from './ticket-transaction-create-without-assigned-by-profile.input';

@InputType()
export class TicketTransactionUpsertWithWhereUniqueWithoutAssignedByProfileInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>;

    @Field(() => TicketTransactionUpdateWithoutAssignedByProfileInput, {nullable:false})
    @Type(() => TicketTransactionUpdateWithoutAssignedByProfileInput)
    update!: TicketTransactionUpdateWithoutAssignedByProfileInput;

    @Field(() => TicketTransactionCreateWithoutAssignedByProfileInput, {nullable:false})
    @Type(() => TicketTransactionCreateWithoutAssignedByProfileInput)
    create!: TicketTransactionCreateWithoutAssignedByProfileInput;
}
