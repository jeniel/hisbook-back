import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PostsUpdateimagesInput } from './posts-updateimages.input';
import { UserUpdateOneWithoutPostsNestedInput } from '../user/user-update-one-without-posts-nested.input';

@InputType()
export class PostsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    datePosted?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PostsUpdateimagesInput, {nullable:true})
    images?: PostsUpdateimagesInput;

    @Field(() => UserUpdateOneWithoutPostsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutPostsNestedInput;
}
