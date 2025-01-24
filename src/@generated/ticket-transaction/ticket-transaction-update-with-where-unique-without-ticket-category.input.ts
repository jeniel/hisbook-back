import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionUpdateWithoutTicketCategoryInput } from './ticket-transaction-update-without-ticket-category.input';

@InputType()
export class TicketTransactionUpdateWithWhereUniqueWithoutTicketCategoryInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>;

    @Field(() => TicketTransactionUpdateWithoutTicketCategoryInput, {nullable:false})
    @Type(() => TicketTransactionUpdateWithoutTicketCategoryInput)
    data!: TicketTransactionUpdateWithoutTicketCategoryInput;
}
