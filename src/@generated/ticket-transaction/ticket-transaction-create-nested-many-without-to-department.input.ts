import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutToDepartmentInput } from './ticket-transaction-create-without-to-department.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutToDepartmentInput } from './ticket-transaction-create-or-connect-without-to-department.input';
import { TicketTransactionCreateManyToDepartmentInputEnvelope } from './ticket-transaction-create-many-to-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';

@InputType()
export class TicketTransactionCreateNestedManyWithoutToDepartmentInput {

    @Field(() => [TicketTransactionCreateWithoutToDepartmentInput], {nullable:true})
    @Type(() => TicketTransactionCreateWithoutToDepartmentInput)
    create?: Array<TicketTransactionCreateWithoutToDepartmentInput>;

    @Field(() => [TicketTransactionCreateOrConnectWithoutToDepartmentInput], {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutToDepartmentInput)
    connectOrCreate?: Array<TicketTransactionCreateOrConnectWithoutToDepartmentInput>;

    @Field(() => TicketTransactionCreateManyToDepartmentInputEnvelope, {nullable:true})
    @Type(() => TicketTransactionCreateManyToDepartmentInputEnvelope)
    createMany?: TicketTransactionCreateManyToDepartmentInputEnvelope;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>>;
}
