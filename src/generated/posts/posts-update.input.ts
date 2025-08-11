import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ImagesUpdateManyWithoutPostNestedInput } from '../images/images-update-many-without-post-nested.input';
import { UserUpdateOneWithoutPostsNestedInput } from '../user/user-update-one-without-posts-nested.input';

@InputType()
export class PostsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => ImagesUpdateManyWithoutPostNestedInput, {nullable:true})
    images?: ImagesUpdateManyWithoutPostNestedInput;

    @Field(() => UserUpdateOneWithoutPostsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutPostsNestedInput;
}
