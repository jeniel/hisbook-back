import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketCategoryWhereUniqueInput } from './ticket-category-where-unique.input';
import { Type } from 'class-transformer';
import { TicketCategoryCreateWithoutTicketTransactionInput } from './ticket-category-create-without-ticket-transaction.input';

@InputType()
export class TicketCategoryCreateOrConnectWithoutTicketTransactionInput {

    @Field(() => TicketCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TicketCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<TicketCategoryWhereUniqueInput, 'id'>;

    @Field(() => TicketCategoryCreateWithoutTicketTransactionInput, {nullable:false})
    @Type(() => TicketCategoryCreateWithoutTicketTransactionInput)
    create!: TicketCategoryCreateWithoutTicketTransactionInput;
}
