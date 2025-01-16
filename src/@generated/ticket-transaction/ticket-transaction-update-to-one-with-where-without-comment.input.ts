import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionWhereInput } from './ticket-transaction-where.input';
import { Type } from 'class-transformer';
import { TicketTransactionUpdateWithoutCommentInput } from './ticket-transaction-update-without-comment.input';

@InputType()
export class TicketTransactionUpdateToOneWithWhereWithoutCommentInput {

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    @Type(() => TicketTransactionWhereInput)
    where?: TicketTransactionWhereInput;

    @Field(() => TicketTransactionUpdateWithoutCommentInput, {nullable:false})
    @Type(() => TicketTransactionUpdateWithoutCommentInput)
    data!: TicketTransactionUpdateWithoutCommentInput;
}
