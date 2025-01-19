import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateWithoutFromDepartmentInput } from './ticket-transaction-create-without-from-department.input';

@InputType()
export class TicketTransactionCreateOrConnectWithoutFromDepartmentInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

    @Field(() => TicketTransactionCreateWithoutFromDepartmentInput, {nullable:false})
    @Type(() => TicketTransactionCreateWithoutFromDepartmentInput)
    create!: TicketTransactionCreateWithoutFromDepartmentInput;
}
