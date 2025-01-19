import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateWithoutAssignedToProfileInput } from './ticket-transaction-create-without-assigned-to-profile.input';

@InputType()
export class TicketTransactionCreateOrConnectWithoutAssignedToProfileInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

    @Field(() => TicketTransactionCreateWithoutAssignedToProfileInput, {nullable:false})
    @Type(() => TicketTransactionCreateWithoutAssignedToProfileInput)
    create!: TicketTransactionCreateWithoutAssignedToProfileInput;
}
