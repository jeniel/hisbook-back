import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutCommentInput } from './profile-create-without-comment.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutCommentInput } from './profile-create-or-connect-without-comment.input';
import { ProfileUpsertWithoutCommentInput } from './profile-upsert-without-comment.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateToOneWithWhereWithoutCommentInput } from './profile-update-to-one-with-where-without-comment.input';

@InputType()
export class ProfileUpdateOneRequiredWithoutCommentNestedInput {

    @Field(() => ProfileCreateWithoutCommentInput, {nullable:true})
    @Type(() => ProfileCreateWithoutCommentInput)
    create?: ProfileCreateWithoutCommentInput;

    @Field(() => ProfileCreateOrConnectWithoutCommentInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutCommentInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutCommentInput;

    @Field(() => ProfileUpsertWithoutCommentInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutCommentInput)
    upsert?: ProfileUpsertWithoutCommentInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileUpdateToOneWithWhereWithoutCommentInput, {nullable:true})
    @Type(() => ProfileUpdateToOneWithWhereWithoutCommentInput)
    update?: ProfileUpdateToOneWithWhereWithoutCommentInput;
}
