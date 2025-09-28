import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutDepartmentInput } from '../user/user-create-nested-many-without-department.input';
import { TicketCreateNestedManyWithoutDepartmentInput } from '../ticket/ticket-create-nested-many-without-department.input';

@InputType()
export class DepartmentCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isSupport?: boolean;

    @Field(() => UserCreateNestedManyWithoutDepartmentInput, {nullable:true})
    users?: UserCreateNestedManyWithoutDepartmentInput;

    @Field(() => TicketCreateNestedManyWithoutDepartmentInput, {nullable:true})
    tickets?: TicketCreateNestedManyWithoutDepartmentInput;
}
