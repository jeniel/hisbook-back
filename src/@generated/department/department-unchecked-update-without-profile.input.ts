import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { TicketTransactionUncheckedUpdateManyWithoutFromDepartmentNestedInput } from '../ticket-transaction/ticket-transaction-unchecked-update-many-without-from-department-nested.input';
import { TicketTransactionUncheckedUpdateManyWithoutToDepartmentNestedInput } from '../ticket-transaction/ticket-transaction-unchecked-update-many-without-to-department-nested.input';

@InputType()
export class DepartmentUncheckedUpdateWithoutProfileInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => TicketTransactionUncheckedUpdateManyWithoutFromDepartmentNestedInput, {nullable:true})
    ticketsFrom?: TicketTransactionUncheckedUpdateManyWithoutFromDepartmentNestedInput;

    @Field(() => TicketTransactionUncheckedUpdateManyWithoutToDepartmentNestedInput, {nullable:true})
    ticketsTo?: TicketTransactionUncheckedUpdateManyWithoutToDepartmentNestedInput;
}
