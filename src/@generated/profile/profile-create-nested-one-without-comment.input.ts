import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutCommentInput } from './profile-create-without-comment.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutCommentInput } from './profile-create-or-connect-without-comment.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutCommentInput {

    @Field(() => ProfileCreateWithoutCommentInput, {nullable:true})
    @Type(() => ProfileCreateWithoutCommentInput)
    create?: ProfileCreateWithoutCommentInput;

    @Field(() => ProfileCreateOrConnectWithoutCommentInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutCommentInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutCommentInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
}
