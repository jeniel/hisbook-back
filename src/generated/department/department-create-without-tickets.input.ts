import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutDepartmentInput } from '../user/user-create-nested-many-without-department.input';

@InputType()
export class DepartmentCreateWithoutTicketsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutDepartmentInput, {nullable:true})
    users?: UserCreateNestedManyWithoutDepartmentInput;
}
