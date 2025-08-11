import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PostsUpdateOneRequiredWithoutImagesNestedInput } from '../posts/posts-update-one-required-without-images-nested.input';

@InputType()
export class ImagesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => PostsUpdateOneRequiredWithoutImagesNestedInput, {nullable:true})
    post?: PostsUpdateOneRequiredWithoutImagesNestedInput;
}
