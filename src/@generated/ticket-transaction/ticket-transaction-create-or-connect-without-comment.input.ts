import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateWithoutCommentInput } from './ticket-transaction-create-without-comment.input';

@InputType()
export class TicketTransactionCreateOrConnectWithoutCommentInput {

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:false})
    @Type(() => TicketTransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

    @Field(() => TicketTransactionCreateWithoutCommentInput, {nullable:false})
    @Type(() => TicketTransactionCreateWithoutCommentInput)
    create!: TicketTransactionCreateWithoutCommentInput;
}
