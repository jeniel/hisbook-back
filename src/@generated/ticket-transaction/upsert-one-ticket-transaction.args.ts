import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateInput } from './ticket-transaction-create.input';
import { TicketTransactionUpdateInput } from './ticket-transaction-update.input';

@ArgsType()
export class UpsertOneTicketTransactionArgs {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>;

    @Field(() => TicketTransactionCreateInput, {nullable:false})
    @Type(() => TicketTransactionCreateInput)
    create!: TicketTransactionCreateInput;

    @Field(() => TicketTransactionUpdateInput, {nullable:false})
    @Type(() => TicketTransactionUpdateInput)
    update!: TicketTransactionUpdateInput;
}
