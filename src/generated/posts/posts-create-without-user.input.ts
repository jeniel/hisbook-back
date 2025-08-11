import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateNestedManyWithoutPostInput } from '../images/images-create-nested-many-without-post.input';

@InputType()
export class PostsCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => ImagesCreateNestedManyWithoutPostInput, {nullable:true})
    images?: ImagesCreateNestedManyWithoutPostInput;
}
