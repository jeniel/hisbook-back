import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutProfileInput } from './comment-create-without-profile.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutProfileInput } from './comment-create-or-connect-without-profile.input';
import { CommentUpsertWithWhereUniqueWithoutProfileInput } from './comment-upsert-with-where-unique-without-profile.input';
import { CommentCreateManyProfileInputEnvelope } from './comment-create-many-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutProfileInput } from './comment-update-with-where-unique-without-profile.input';
import { CommentUpdateManyWithWhereWithoutProfileInput } from './comment-update-many-with-where-without-profile.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUncheckedUpdateManyWithoutProfileNestedInput {

    @Field(() => [CommentCreateWithoutProfileInput], {nullable:true})
    @Type(() => CommentCreateWithoutProfileInput)
    create?: Array<CommentCreateWithoutProfileInput>;

    @Field(() => [CommentCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutProfileInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutProfileInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutProfileInput>;

    @Field(() => CommentCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyProfileInputEnvelope)
    createMany?: CommentCreateManyProfileInputEnvelope;

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

    @Field(() => [CommentUpdateWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutProfileInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutProfileInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutProfileInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutProfileInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutProfileInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
