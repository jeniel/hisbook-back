import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ProfileUncheckedUpdateManyWithoutDepartmentNestedInput } from '../profile/profile-unchecked-update-many-without-department-nested.input';

@InputType()
export class DepartmentUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ProfileUncheckedUpdateManyWithoutDepartmentNestedInput, {nullable:true})
    profile?: ProfileUncheckedUpdateManyWithoutDepartmentNestedInput;
}
