import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsCreateimagesInput } from './posts-createimages.input';
import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input';

@InputType()
export class PostsCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    datePosted?: Date | string;

    @Field(() => PostsCreateimagesInput, {nullable:true})
    images?: PostsCreateimagesInput;

    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutPostsInput;
}
