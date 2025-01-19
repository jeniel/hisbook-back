import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionUpdateWithoutCreatedByProfileInput } from './ticket-transaction-update-without-created-by-profile.input';

@InputType()
export class TicketTransactionUpdateWithWhereUniqueWithoutCreatedByProfileInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

    @Field(() => TicketTransactionUpdateWithoutCreatedByProfileInput, {nullable:false})
    @Type(() => TicketTransactionUpdateWithoutCreatedByProfileInput)
    data!: TicketTransactionUpdateWithoutCreatedByProfileInput;
}
