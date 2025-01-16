import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutCommentInput } from './profile-update-without-comment.input';

@InputType()
export class ProfileUpdateToOneWithWhereWithoutCommentInput {

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;

    @Field(() => ProfileUpdateWithoutCommentInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutCommentInput)
    data!: ProfileUpdateWithoutCommentInput;
}
