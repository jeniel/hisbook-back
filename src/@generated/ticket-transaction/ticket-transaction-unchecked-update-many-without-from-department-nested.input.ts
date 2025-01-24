import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutFromDepartmentInput } from './ticket-transaction-create-without-from-department.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutFromDepartmentInput } from './ticket-transaction-create-or-connect-without-from-department.input';
import { TicketTransactionUpsertWithWhereUniqueWithoutFromDepartmentInput } from './ticket-transaction-upsert-with-where-unique-without-from-department.input';
import { TicketTransactionCreateManyFromDepartmentInputEnvelope } from './ticket-transaction-create-many-from-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { TicketTransactionUpdateWithWhereUniqueWithoutFromDepartmentInput } from './ticket-transaction-update-with-where-unique-without-from-department.input';
import { TicketTransactionUpdateManyWithWhereWithoutFromDepartmentInput } from './ticket-transaction-update-many-with-where-without-from-department.input';
import { TicketTransactionScalarWhereInput } from './ticket-transaction-scalar-where.input';

@InputType()
export class TicketTransactionUncheckedUpdateManyWithoutFromDepartmentNestedInput {

    @Field(() => [TicketTransactionCreateWithoutFromDepartmentInput], {nullable:true})
    @Type(() => TicketTransactionCreateWithoutFromDepartmentInput)
    create?: Array<TicketTransactionCreateWithoutFromDepartmentInput>;

    @Field(() => [TicketTransactionCreateOrConnectWithoutFromDepartmentInput], {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutFromDepartmentInput)
    connectOrCreate?: Array<TicketTransactionCreateOrConnectWithoutFromDepartmentInput>;

    @Field(() => [TicketTransactionUpsertWithWhereUniqueWithoutFromDepartmentInput], {nullable:true})
    @Type(() => TicketTransactionUpsertWithWhereUniqueWithoutFromDepartmentInput)
    upsert?: Array<TicketTransactionUpsertWithWhereUniqueWithoutFromDepartmentInput>;

    @Field(() => TicketTransactionCreateManyFromDepartmentInputEnvelope, {nullable:true})
    @Type(() => TicketTransactionCreateManyFromDepartmentInputEnvelope)
    createMany?: TicketTransactionCreateManyFromDepartmentInputEnvelope;

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

    @Field(() => [TicketTransactionUpdateWithWhereUniqueWithoutFromDepartmentInput], {nullable:true})
    @Type(() => TicketTransactionUpdateWithWhereUniqueWithoutFromDepartmentInput)
    update?: Array<TicketTransactionUpdateWithWhereUniqueWithoutFromDepartmentInput>;

    @Field(() => [TicketTransactionUpdateManyWithWhereWithoutFromDepartmentInput], {nullable:true})
    @Type(() => TicketTransactionUpdateManyWithWhereWithoutFromDepartmentInput)
    updateMany?: Array<TicketTransactionUpdateManyWithWhereWithoutFromDepartmentInput>;

    @Field(() => [TicketTransactionScalarWhereInput], {nullable:true})
    @Type(() => TicketTransactionScalarWhereInput)
    deleteMany?: Array<TicketTransactionScalarWhereInput>;
}
