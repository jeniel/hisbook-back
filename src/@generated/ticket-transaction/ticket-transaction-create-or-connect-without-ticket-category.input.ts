import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateWithoutTicketCategoryInput } from './ticket-transaction-create-without-ticket-category.input';

@InputType()
export class TicketTransactionCreateOrConnectWithoutTicketCategoryInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

    @Field(() => TicketTransactionCreateWithoutTicketCategoryInput, {nullable:false})
    @Type(() => TicketTransactionCreateWithoutTicketCategoryInput)
    create!: TicketTransactionCreateWithoutTicketCategoryInput;
}
