import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ProfileUpdateManyWithoutDepartmentNestedInput } from '../profile/profile-update-many-without-department-nested.input';
import { TicketTransactionUpdateManyWithoutToDepartmentNestedInput } from '../ticket-transaction/ticket-transaction-update-many-without-to-department-nested.input';

@InputType()
export class DepartmentUpdateWithoutTicketsFromInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ProfileUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    profile?: ProfileUpdateManyWithoutDepartmentNestedInput;

    @Field(() => TicketTransactionUpdateManyWithoutToDepartmentNestedInput, {nullable:true})
    ticketsTo?: TicketTransactionUpdateManyWithoutToDepartmentNestedInput;
}
