import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ProfileUpdateManyWithoutDepartmentNestedInput } from '../profile/profile-update-many-without-department-nested.input';
import { TicketTransactionUpdateManyWithoutFromDepartmentNestedInput } from '../ticket-transaction/ticket-transaction-update-many-without-from-department-nested.input';

@InputType()
export class DepartmentUpdateWithoutTicketsToInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ProfileUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    profile?: ProfileUpdateManyWithoutDepartmentNestedInput;

    @Field(() => TicketTransactionUpdateManyWithoutFromDepartmentNestedInput, {nullable:true})
    ticketsFrom?: TicketTransactionUpdateManyWithoutFromDepartmentNestedInput;
}
