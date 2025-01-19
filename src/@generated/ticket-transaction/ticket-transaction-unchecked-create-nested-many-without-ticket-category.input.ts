import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutTicketCategoryInput } from './ticket-transaction-create-without-ticket-category.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutTicketCategoryInput } from './ticket-transaction-create-or-connect-without-ticket-category.input';
import { TicketTransactionCreateManyTicketCategoryInputEnvelope } from './ticket-transaction-create-many-ticket-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';

@InputType()
export class TicketTransactionUncheckedCreateNestedManyWithoutTicketCategoryInput {

    @Field(() => [TicketTransactionCreateWithoutTicketCategoryInput], {nullable:true})
    @Type(() => TicketTransactionCreateWithoutTicketCategoryInput)
    create?: Array<TicketTransactionCreateWithoutTicketCategoryInput>;

    @Field(() => [TicketTransactionCreateOrConnectWithoutTicketCategoryInput], {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutTicketCategoryInput)
    connectOrCreate?: Array<TicketTransactionCreateOrConnectWithoutTicketCategoryInput>;

    @Field(() => TicketTransactionCreateManyTicketCategoryInputEnvelope, {nullable:true})
    @Type(() => TicketTransactionCreateManyTicketCategoryInputEnvelope)
    createMany?: TicketTransactionCreateManyTicketCategoryInputEnvelope;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>>;
}
