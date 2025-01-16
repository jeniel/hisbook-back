import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionUpdateWithoutCommentInput } from './ticket-transaction-update-without-comment.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateWithoutCommentInput } from './ticket-transaction-create-without-comment.input';
import { TicketTransactionWhereInput } from './ticket-transaction-where.input';

@InputType()
export class TicketTransactionUpsertWithoutCommentInput {

    @Field(() => TicketTransactionUpdateWithoutCommentInput, {nullable:false})
    @Type(() => TicketTransactionUpdateWithoutCommentInput)
    update!: TicketTransactionUpdateWithoutCommentInput;

    @Field(() => TicketTransactionCreateWithoutCommentInput, {nullable:false})
    @Type(() => TicketTransactionCreateWithoutCommentInput)
    create!: TicketTransactionCreateWithoutCommentInput;

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    @Type(() => TicketTransactionWhereInput)
    where?: TicketTransactionWhereInput;
}
