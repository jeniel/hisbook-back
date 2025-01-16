import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketTransactionUpdateInput } from './ticket-transaction-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';

@ArgsType()
export class UpdateOneTicketTransactionArgs {

    @Field(() => TicketTransactionUpdateInput, {nullable:false})
    @Type(() => TicketTransactionUpdateInput)
    data!: TicketTransactionUpdateInput;

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;
}
