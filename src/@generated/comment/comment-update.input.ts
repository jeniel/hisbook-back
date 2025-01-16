import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { TicketTransactionUpdateOneRequiredWithoutCommentNestedInput } from '../ticket-transaction/ticket-transaction-update-one-required-without-comment-nested.input';
import { ProfileUpdateOneRequiredWithoutCommentNestedInput } from '../profile/profile-update-one-required-without-comment-nested.input';

@InputType()
export class CommentUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    createdBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updatedBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => TicketTransactionUpdateOneRequiredWithoutCommentNestedInput, {nullable:true})
    ticket?: TicketTransactionUpdateOneRequiredWithoutCommentNestedInput;

    @Field(() => ProfileUpdateOneRequiredWithoutCommentNestedInput, {nullable:true})
    profile?: ProfileUpdateOneRequiredWithoutCommentNestedInput;
}
