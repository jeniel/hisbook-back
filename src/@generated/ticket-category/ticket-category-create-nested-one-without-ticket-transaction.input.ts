import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCategoryCreateWithoutTicketTransactionInput } from './ticket-category-create-without-ticket-transaction.input';
import { Type } from 'class-transformer';
import { TicketCategoryCreateOrConnectWithoutTicketTransactionInput } from './ticket-category-create-or-connect-without-ticket-transaction.input';
import { Prisma } from '@prisma/client';
import { TicketCategoryWhereUniqueInput } from './ticket-category-where-unique.input';

@InputType()
export class TicketCategoryCreateNestedOneWithoutTicketTransactionInput {

    @Field(() => TicketCategoryCreateWithoutTicketTransactionInput, {nullable:true})
    @Type(() => TicketCategoryCreateWithoutTicketTransactionInput)
    create?: TicketCategoryCreateWithoutTicketTransactionInput;

    @Field(() => TicketCategoryCreateOrConnectWithoutTicketTransactionInput, {nullable:true})
    @Type(() => TicketCategoryCreateOrConnectWithoutTicketTransactionInput)
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutTicketTransactionInput;

    @Field(() => TicketCategoryWhereUniqueInput, {nullable:true})
    @Type(() => TicketCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<TicketCategoryWhereUniqueInput, 'id'>;
}
