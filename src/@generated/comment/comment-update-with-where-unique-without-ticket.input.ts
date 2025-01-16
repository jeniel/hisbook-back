import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutTicketInput } from './comment-update-without-ticket.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutTicketInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutTicketInput, {nullable:false})
    @Type(() => CommentUpdateWithoutTicketInput)
    data!: CommentUpdateWithoutTicketInput;
}
