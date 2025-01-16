import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedOneWithoutCommentInput } from '../profile/profile-create-nested-one-without-comment.input';

@InputType()
export class CommentCreateWithoutTicketInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => ProfileCreateNestedOneWithoutCommentInput, {nullable:false})
    profile!: ProfileCreateNestedOneWithoutCommentInput;
}
