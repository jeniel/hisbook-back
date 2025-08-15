import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesUncheckedCreateNestedManyWithoutPostInput } from '../images/images-unchecked-create-nested-many-without-post.input';

@InputType()
export class PostsUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    datePosted?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => ImagesUncheckedCreateNestedManyWithoutPostInput, {nullable:true})
    images?: ImagesUncheckedCreateNestedManyWithoutPostInput;
}
