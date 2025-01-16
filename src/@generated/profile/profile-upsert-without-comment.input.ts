import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutCommentInput } from './profile-update-without-comment.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutCommentInput } from './profile-create-without-comment.input';
import { ProfileWhereInput } from './profile-where.input';

@InputType()
export class ProfileUpsertWithoutCommentInput {

    @Field(() => ProfileUpdateWithoutCommentInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutCommentInput)
    update!: ProfileUpdateWithoutCommentInput;

    @Field(() => ProfileCreateWithoutCommentInput, {nullable:false})
    @Type(() => ProfileCreateWithoutCommentInput)
    create!: ProfileCreateWithoutCommentInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;
}
