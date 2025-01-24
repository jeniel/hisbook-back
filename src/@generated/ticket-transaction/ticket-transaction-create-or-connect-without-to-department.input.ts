import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateWithoutToDepartmentInput } from './ticket-transaction-create-without-to-department.input';

@InputType()
export class TicketTransactionCreateOrConnectWithoutToDepartmentInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>;

    @Field(() => TicketTransactionCreateWithoutToDepartmentInput, {nullable:false})
    @Type(() => TicketTransactionCreateWithoutToDepartmentInput)
    create!: TicketTransactionCreateWithoutToDepartmentInput;
}
