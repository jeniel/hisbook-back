import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutDepartmentNestedInput } from '../user/user-unchecked-update-many-without-department-nested.input';

@InputType()
export class DepartmentUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    profiles?: UserUncheckedUpdateManyWithoutDepartmentNestedInput;
}
