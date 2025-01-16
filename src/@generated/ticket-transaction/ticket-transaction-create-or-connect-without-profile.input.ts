import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateWithoutProfileInput } from './ticket-transaction-create-without-profile.input';

@InputType()
export class TicketTransactionCreateOrConnectWithoutProfileInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

    @Field(() => TicketTransactionCreateWithoutProfileInput, {nullable:false})
    @Type(() => TicketTransactionCreateWithoutProfileInput)
    create!: TicketTransactionCreateWithoutProfileInput;
}
