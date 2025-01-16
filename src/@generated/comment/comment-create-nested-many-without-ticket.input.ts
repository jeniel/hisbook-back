import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutTicketInput } from './comment-create-without-ticket.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutTicketInput } from './comment-create-or-connect-without-ticket.input';
import { CommentCreateManyTicketInputEnvelope } from './comment-create-many-ticket-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedManyWithoutTicketInput {

    @Field(() => [CommentCreateWithoutTicketInput], {nullable:true})
    @Type(() => CommentCreateWithoutTicketInput)
    create?: Array<CommentCreateWithoutTicketInput>;

    @Field(() => [CommentCreateOrConnectWithoutTicketInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutTicketInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutTicketInput>;

    @Field(() => CommentCreateManyTicketInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyTicketInputEnvelope)
    createMany?: CommentCreateManyTicketInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
