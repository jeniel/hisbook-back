import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionUpdateWithoutFromDepartmentInput } from './ticket-transaction-update-without-from-department.input';

@InputType()
export class TicketTransactionUpdateWithWhereUniqueWithoutFromDepartmentInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>;

    @Field(() => TicketTransactionUpdateWithoutFromDepartmentInput, {nullable:false})
    @Type(() => TicketTransactionUpdateWithoutFromDepartmentInput)
    data!: TicketTransactionUpdateWithoutFromDepartmentInput;
}
