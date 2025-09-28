import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateManyWithoutDepartmentNestedInput } from '../user/user-update-many-without-department-nested.input';
import { TicketUpdateManyWithoutDepartmentNestedInput } from '../ticket/ticket-update-many-without-department-nested.input';

@InputType()
export class DepartmentUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isSupport?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutDepartmentNestedInput;

    @Field(() => TicketUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    tickets?: TicketUpdateManyWithoutDepartmentNestedInput;
}
