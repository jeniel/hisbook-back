import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutDepartmentNestedInput } from '../user/user-unchecked-update-many-without-department-nested.input';
import { TicketUncheckedUpdateManyWithoutDepartmentNestedInput } from '../ticket/ticket-unchecked-update-many-without-department-nested.input';

@InputType()
export class DepartmentUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput;

    @Field(() => TicketUncheckedUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    tickets?: TicketUncheckedUpdateManyWithoutDepartmentNestedInput;
}
