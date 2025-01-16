import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutProfileInput } from './comment-create-without-profile.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutProfileInput } from './comment-create-or-connect-without-profile.input';
import { CommentCreateManyProfileInputEnvelope } from './comment-create-many-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedManyWithoutProfileInput {

    @Field(() => [CommentCreateWithoutProfileInput], {nullable:true})
    @Type(() => CommentCreateWithoutProfileInput)
    create?: Array<CommentCreateWithoutProfileInput>;

    @Field(() => [CommentCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutProfileInput>;

    @Field(() => CommentCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyProfileInputEnvelope)
    createMany?: CommentCreateManyProfileInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
