import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsCreateNestedOneWithoutImagesInput } from '../posts/posts-create-nested-one-without-images.input';

@InputType()
export class ImagesCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => PostsCreateNestedOneWithoutImagesInput, {nullable:false})
    post!: PostsCreateNestedOneWithoutImagesInput;
}
