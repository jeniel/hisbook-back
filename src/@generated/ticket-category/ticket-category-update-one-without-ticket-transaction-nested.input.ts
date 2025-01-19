import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCategoryCreateWithoutTicketTransactionInput } from './ticket-category-create-without-ticket-transaction.input';
import { Type } from 'class-transformer';
import { TicketCategoryCreateOrConnectWithoutTicketTransactionInput } from './ticket-category-create-or-connect-without-ticket-transaction.input';
import { TicketCategoryUpsertWithoutTicketTransactionInput } from './ticket-category-upsert-without-ticket-transaction.input';
import { TicketCategoryWhereInput } from './ticket-category-where.input';
import { Prisma } from '@prisma/client';
import { TicketCategoryWhereUniqueInput } from './ticket-category-where-unique.input';
import { TicketCategoryUpdateToOneWithWhereWithoutTicketTransactionInput } from './ticket-category-update-to-one-with-where-without-ticket-transaction.input';

@InputType()
export class TicketCategoryUpdateOneWithoutTicketTransactionNestedInput {

    @Field(() => TicketCategoryCreateWithoutTicketTransactionInput, {nullable:true})
    @Type(() => TicketCategoryCreateWithoutTicketTransactionInput)
    create?: TicketCategoryCreateWithoutTicketTransactionInput;

    @Field(() => TicketCategoryCreateOrConnectWithoutTicketTransactionInput, {nullable:true})
    @Type(() => TicketCategoryCreateOrConnectWithoutTicketTransactionInput)
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutTicketTransactionInput;

    @Field(() => TicketCategoryUpsertWithoutTicketTransactionInput, {nullable:true})
    @Type(() => TicketCategoryUpsertWithoutTicketTransactionInput)
    upsert?: TicketCategoryUpsertWithoutTicketTransactionInput;

    @Field(() => TicketCategoryWhereInput, {nullable:true})
    @Type(() => TicketCategoryWhereInput)
    disconnect?: TicketCategoryWhereInput;

    @Field(() => TicketCategoryWhereInput, {nullable:true})
    @Type(() => TicketCategoryWhereInput)
    delete?: TicketCategoryWhereInput;

    @Field(() => TicketCategoryWhereUniqueInput, {nullable:true})
    @Type(() => TicketCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<TicketCategoryWhereUniqueInput, 'id'>;

    @Field(() => TicketCategoryUpdateToOneWithWhereWithoutTicketTransactionInput, {nullable:true})
    @Type(() => TicketCategoryUpdateToOneWithWhereWithoutTicketTransactionInput)
    update?: TicketCategoryUpdateToOneWithWhereWithoutTicketTransactionInput;
}
