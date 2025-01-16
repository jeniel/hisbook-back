import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutProfileInput } from './comment-create-without-profile.input';

@InputType()
export class CommentCreateOrConnectWithoutProfileInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutProfileInput, {nullable:false})
    @Type(() => CommentCreateWithoutProfileInput)
    create!: CommentCreateWithoutProfileInput;
}
