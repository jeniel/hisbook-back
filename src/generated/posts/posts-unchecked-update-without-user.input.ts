import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ImagesUncheckedUpdateManyWithoutPostNestedInput } from '../images/images-unchecked-update-many-without-post-nested.input';

@InputType()
export class PostsUncheckedUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    datePosted?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ImagesUncheckedUpdateManyWithoutPostNestedInput, {nullable:true})
    images?: ImagesUncheckedUpdateManyWithoutPostNestedInput;
}
