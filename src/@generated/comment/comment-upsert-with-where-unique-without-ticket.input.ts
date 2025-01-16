import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutTicketInput } from './comment-update-without-ticket.input';
import { CommentCreateWithoutTicketInput } from './comment-create-without-ticket.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutTicketInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutTicketInput, {nullable:false})
    @Type(() => CommentUpdateWithoutTicketInput)
    update!: CommentUpdateWithoutTicketInput;

    @Field(() => CommentCreateWithoutTicketInput, {nullable:false})
    @Type(() => CommentCreateWithoutTicketInput)
    create!: CommentCreateWithoutTicketInput;
}
