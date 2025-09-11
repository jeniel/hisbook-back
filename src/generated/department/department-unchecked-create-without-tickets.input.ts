import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutDepartmentInput } from '../user/user-unchecked-create-nested-many-without-department.input';

@InputType()
export class DepartmentUncheckedCreateWithoutTicketsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput;
}
