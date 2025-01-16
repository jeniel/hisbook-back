import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionUpdateWithoutProfileInput } from './ticket-transaction-update-without-profile.input';

@InputType()
export class TicketTransactionUpdateWithWhereUniqueWithoutProfileInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

    @Field(() => TicketTransactionUpdateWithoutProfileInput, {nullable:false})
    @Type(() => TicketTransactionUpdateWithoutProfileInput)
    data!: TicketTransactionUpdateWithoutProfileInput;
}
