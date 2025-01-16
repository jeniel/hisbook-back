import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutTicketInput } from './comment-create-without-ticket.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutTicketInput } from './comment-create-or-connect-without-ticket.input';
import { CommentUpsertWithWhereUniqueWithoutTicketInput } from './comment-upsert-with-where-unique-without-ticket.input';
import { CommentCreateManyTicketInputEnvelope } from './comment-create-many-ticket-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutTicketInput } from './comment-update-with-where-unique-without-ticket.input';
import { CommentUpdateManyWithWhereWithoutTicketInput } from './comment-update-many-with-where-without-ticket.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUncheckedUpdateManyWithoutTicketNestedInput {

    @Field(() => [CommentCreateWithoutTicketInput], {nullable:true})
    @Type(() => CommentCreateWithoutTicketInput)
    create?: Array<CommentCreateWithoutTicketInput>;

    @Field(() => [CommentCreateOrConnectWithoutTicketInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutTicketInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutTicketInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutTicketInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutTicketInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutTicketInput>;

    @Field(() => CommentCreateManyTicketInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyTicketInputEnvelope)
    createMany?: CommentCreateManyTicketInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutTicketInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutTicketInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutTicketInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutTicketInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutTicketInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutTicketInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
