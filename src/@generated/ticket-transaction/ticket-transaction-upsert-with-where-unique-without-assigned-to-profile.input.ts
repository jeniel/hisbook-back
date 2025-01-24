import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionUpdateWithoutAssignedToProfileInput } from './ticket-transaction-update-without-assigned-to-profile.input';
import { TicketTransactionCreateWithoutAssignedToProfileInput } from './ticket-transaction-create-without-assigned-to-profile.input';

@InputType()
export class TicketTransactionUpsertWithWhereUniqueWithoutAssignedToProfileInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>;

    @Field(() => TicketTransactionUpdateWithoutAssignedToProfileInput, {nullable:false})
    @Type(() => TicketTransactionUpdateWithoutAssignedToProfileInput)
    update!: TicketTransactionUpdateWithoutAssignedToProfileInput;

    @Field(() => TicketTransactionCreateWithoutAssignedToProfileInput, {nullable:false})
    @Type(() => TicketTransactionCreateWithoutAssignedToProfileInput)
    create!: TicketTransactionCreateWithoutAssignedToProfileInput;
}
