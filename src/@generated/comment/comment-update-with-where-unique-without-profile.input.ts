import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutProfileInput } from './comment-update-without-profile.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutProfileInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutProfileInput, {nullable:false})
    @Type(() => CommentUpdateWithoutProfileInput)
    data!: CommentUpdateWithoutProfileInput;
}
