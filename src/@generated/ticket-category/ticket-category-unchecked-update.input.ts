import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { TicketTransactionUncheckedUpdateManyWithoutTicketCategoryNestedInput } from '../ticket-transaction/ticket-transaction-unchecked-update-many-without-ticket-category-nested.input';

@InputType()
export class TicketCategoryUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => TicketTransactionUncheckedUpdateManyWithoutTicketCategoryNestedInput, {nullable:true})
    ticketTransaction?: TicketTransactionUncheckedUpdateManyWithoutTicketCategoryNestedInput;
}
