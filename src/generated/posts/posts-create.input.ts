import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateNestedManyWithoutPostInput } from '../images/images-create-nested-many-without-post.input';
import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input';

@InputType()
export class PostsCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => ImagesCreateNestedManyWithoutPostInput, {nullable:true})
    images?: ImagesCreateNestedManyWithoutPostInput;

    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutPostsInput;
}
