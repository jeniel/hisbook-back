import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { TicketTransactionUpdateManyWithoutFromDepartmentNestedInput } from '../ticket-transaction/ticket-transaction-update-many-without-from-department-nested.input';
import { TicketTransactionUpdateManyWithoutToDepartmentNestedInput } from '../ticket-transaction/ticket-transaction-update-many-without-to-department-nested.input';

@InputType()
export class DepartmentUpdateWithoutProfileInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => TicketTransactionUpdateManyWithoutFromDepartmentNestedInput, {nullable:true})
    ticketsFrom?: TicketTransactionUpdateManyWithoutFromDepartmentNestedInput;

    @Field(() => TicketTransactionUpdateManyWithoutToDepartmentNestedInput, {nullable:true})
    ticketsTo?: TicketTransactionUpdateManyWithoutToDepartmentNestedInput;
}
