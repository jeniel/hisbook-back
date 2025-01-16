import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutCommentInput } from './profile-create-without-comment.input';

@InputType()
export class ProfileCreateOrConnectWithoutCommentInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileCreateWithoutCommentInput, {nullable:false})
    @Type(() => ProfileCreateWithoutCommentInput)
    create!: ProfileCreateWithoutCommentInput;
}
