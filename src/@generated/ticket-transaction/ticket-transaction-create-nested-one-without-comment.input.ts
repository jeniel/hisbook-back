import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutCommentInput } from './ticket-transaction-create-without-comment.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutCommentInput } from './ticket-transaction-create-or-connect-without-comment.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';

@InputType()
export class TicketTransactionCreateNestedOneWithoutCommentInput {

    @Field(() => TicketTransactionCreateWithoutCommentInput, {nullable:true})
    @Type(() => TicketTransactionCreateWithoutCommentInput)
    create?: TicketTransactionCreateWithoutCommentInput;

    @Field(() => TicketTransactionCreateOrConnectWithoutCommentInput, {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutCommentInput)
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutCommentInput;

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>;
}
