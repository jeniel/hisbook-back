import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutCommentInput } from './ticket-transaction-create-without-comment.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutCommentInput } from './ticket-transaction-create-or-connect-without-comment.input';
import { TicketTransactionUpsertWithoutCommentInput } from './ticket-transaction-upsert-without-comment.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { TicketTransactionUpdateToOneWithWhereWithoutCommentInput } from './ticket-transaction-update-to-one-with-where-without-comment.input';

@InputType()
export class TicketTransactionUpdateOneRequiredWithoutCommentNestedInput {

    @Field(() => TicketTransactionCreateWithoutCommentInput, {nullable:true})
    @Type(() => TicketTransactionCreateWithoutCommentInput)
    create?: TicketTransactionCreateWithoutCommentInput;

    @Field(() => TicketTransactionCreateOrConnectWithoutCommentInput, {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutCommentInput)
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutCommentInput;

    @Field(() => TicketTransactionUpsertWithoutCommentInput, {nullable:true})
    @Type(() => TicketTransactionUpsertWithoutCommentInput)
    upsert?: TicketTransactionUpsertWithoutCommentInput;

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

    @Field(() => TicketTransactionUpdateToOneWithWhereWithoutCommentInput, {nullable:true})
    @Type(() => TicketTransactionUpdateToOneWithWhereWithoutCommentInput)
    update?: TicketTransactionUpdateToOneWithWhereWithoutCommentInput;
}
