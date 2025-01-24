import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutFromDepartmentInput } from './ticket-transaction-create-without-from-department.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutFromDepartmentInput } from './ticket-transaction-create-or-connect-without-from-department.input';
import { TicketTransactionCreateManyFromDepartmentInputEnvelope } from './ticket-transaction-create-many-from-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';

@InputType()
export class TicketTransactionUncheckedCreateNestedManyWithoutFromDepartmentInput {

    @Field(() => [TicketTransactionCreateWithoutFromDepartmentInput], {nullable:true})
    @Type(() => TicketTransactionCreateWithoutFromDepartmentInput)
    create?: Array<TicketTransactionCreateWithoutFromDepartmentInput>;

    @Field(() => [TicketTransactionCreateOrConnectWithoutFromDepartmentInput], {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutFromDepartmentInput)
    connectOrCreate?: Array<TicketTransactionCreateOrConnectWithoutFromDepartmentInput>;

    @Field(() => TicketTransactionCreateManyFromDepartmentInputEnvelope, {nullable:true})
    @Type(() => TicketTransactionCreateManyFromDepartmentInputEnvelope)
    createMany?: TicketTransactionCreateManyFromDepartmentInputEnvelope;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>>;
}
