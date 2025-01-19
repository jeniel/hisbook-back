import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionUpdateWithoutToDepartmentInput } from './ticket-transaction-update-without-to-department.input';

@InputType()
export class TicketTransactionUpdateWithWhereUniqueWithoutToDepartmentInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

    @Field(() => TicketTransactionUpdateWithoutToDepartmentInput, {nullable:false})
    @Type(() => TicketTransactionUpdateWithoutToDepartmentInput)
    data!: TicketTransactionUpdateWithoutToDepartmentInput;
}
