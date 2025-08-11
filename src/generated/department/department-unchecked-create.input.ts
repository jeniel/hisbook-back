import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutDepartmentInput } from '../user/user-unchecked-create-nested-many-without-department.input';

@InputType()
export class DepartmentUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => UserUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput;
}
