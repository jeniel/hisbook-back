import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutTicketCategoryInput } from './ticket-transaction-create-without-ticket-category.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutTicketCategoryInput } from './ticket-transaction-create-or-connect-without-ticket-category.input';
import { TicketTransactionUpsertWithWhereUniqueWithoutTicketCategoryInput } from './ticket-transaction-upsert-with-where-unique-without-ticket-category.input';
import { TicketTransactionCreateManyTicketCategoryInputEnvelope } from './ticket-transaction-create-many-ticket-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { TicketTransactionUpdateWithWhereUniqueWithoutTicketCategoryInput } from './ticket-transaction-update-with-where-unique-without-ticket-category.input';
import { TicketTransactionUpdateManyWithWhereWithoutTicketCategoryInput } from './ticket-transaction-update-many-with-where-without-ticket-category.input';
import { TicketTransactionScalarWhereInput } from './ticket-transaction-scalar-where.input';

@InputType()
export class TicketTransactionUncheckedUpdateManyWithoutTicketCategoryNestedInput {

    @Field(() => [TicketTransactionCreateWithoutTicketCategoryInput], {nullable:true})
    @Type(() => TicketTransactionCreateWithoutTicketCategoryInput)
    create?: Array<TicketTransactionCreateWithoutTicketCategoryInput>;

    @Field(() => [TicketTransactionCreateOrConnectWithoutTicketCategoryInput], {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutTicketCategoryInput)
    connectOrCreate?: Array<TicketTransactionCreateOrConnectWithoutTicketCategoryInput>;

    @Field(() => [TicketTransactionUpsertWithWhereUniqueWithoutTicketCategoryInput], {nullable:true})
    @Type(() => TicketTransactionUpsertWithWhereUniqueWithoutTicketCategoryInput)
    upsert?: Array<TicketTransactionUpsertWithWhereUniqueWithoutTicketCategoryInput>;

    @Field(() => TicketTransactionCreateManyTicketCategoryInputEnvelope, {nullable:true})
    @Type(() => TicketTransactionCreateManyTicketCategoryInputEnvelope)
    createMany?: TicketTransactionCreateManyTicketCategoryInputEnvelope;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TicketTransactionUpdateWithWhereUniqueWithoutTicketCategoryInput], {nullable:true})
    @Type(() => TicketTransactionUpdateWithWhereUniqueWithoutTicketCategoryInput)
    update?: Array<TicketTransactionUpdateWithWhereUniqueWithoutTicketCategoryInput>;

    @Field(() => [TicketTransactionUpdateManyWithWhereWithoutTicketCategoryInput], {nullable:true})
    @Type(() => TicketTransactionUpdateManyWithWhereWithoutTicketCategoryInput)
    updateMany?: Array<TicketTransactionUpdateManyWithWhereWithoutTicketCategoryInput>;

    @Field(() => [TicketTransactionScalarWhereInput], {nullable:true})
    @Type(() => TicketTransactionScalarWhereInput)
    deleteMany?: Array<TicketTransactionScalarWhereInput>;
}
