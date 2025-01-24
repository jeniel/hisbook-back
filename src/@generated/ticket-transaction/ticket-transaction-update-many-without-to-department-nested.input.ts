import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutToDepartmentInput } from './ticket-transaction-create-without-to-department.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutToDepartmentInput } from './ticket-transaction-create-or-connect-without-to-department.input';
import { TicketTransactionUpsertWithWhereUniqueWithoutToDepartmentInput } from './ticket-transaction-upsert-with-where-unique-without-to-department.input';
import { TicketTransactionCreateManyToDepartmentInputEnvelope } from './ticket-transaction-create-many-to-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { TicketTransactionUpdateWithWhereUniqueWithoutToDepartmentInput } from './ticket-transaction-update-with-where-unique-without-to-department.input';
import { TicketTransactionUpdateManyWithWhereWithoutToDepartmentInput } from './ticket-transaction-update-many-with-where-without-to-department.input';
import { TicketTransactionScalarWhereInput } from './ticket-transaction-scalar-where.input';

@InputType()
export class TicketTransactionUpdateManyWithoutToDepartmentNestedInput {

    @Field(() => [TicketTransactionCreateWithoutToDepartmentInput], {nullable:true})
    @Type(() => TicketTransactionCreateWithoutToDepartmentInput)
    create?: Array<TicketTransactionCreateWithoutToDepartmentInput>;

    @Field(() => [TicketTransactionCreateOrConnectWithoutToDepartmentInput], {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutToDepartmentInput)
    connectOrCreate?: Array<TicketTransactionCreateOrConnectWithoutToDepartmentInput>;

    @Field(() => [TicketTransactionUpsertWithWhereUniqueWithoutToDepartmentInput], {nullable:true})
    @Type(() => TicketTransactionUpsertWithWhereUniqueWithoutToDepartmentInput)
    upsert?: Array<TicketTransactionUpsertWithWhereUniqueWithoutToDepartmentInput>;

    @Field(() => TicketTransactionCreateManyToDepartmentInputEnvelope, {nullable:true})
    @Type(() => TicketTransactionCreateManyToDepartmentInputEnvelope)
    createMany?: TicketTransactionCreateManyToDepartmentInputEnvelope;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>>;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>>;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>>;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>>;

    @Field(() => [TicketTransactionUpdateWithWhereUniqueWithoutToDepartmentInput], {nullable:true})
    @Type(() => TicketTransactionUpdateWithWhereUniqueWithoutToDepartmentInput)
    update?: Array<TicketTransactionUpdateWithWhereUniqueWithoutToDepartmentInput>;

    @Field(() => [TicketTransactionUpdateManyWithWhereWithoutToDepartmentInput], {nullable:true})
    @Type(() => TicketTransactionUpdateManyWithWhereWithoutToDepartmentInput)
    updateMany?: Array<TicketTransactionUpdateManyWithWhereWithoutToDepartmentInput>;

    @Field(() => [TicketTransactionScalarWhereInput], {nullable:true})
    @Type(() => TicketTransactionScalarWhereInput)
    deleteMany?: Array<TicketTransactionScalarWhereInput>;
}
