import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutDepartmentInput } from '../user/user-unchecked-create-nested-many-without-department.input';
import { TicketUncheckedCreateNestedManyWithoutDepartmentInput } from '../ticket/ticket-unchecked-create-nested-many-without-department.input';

@InputType()
export class DepartmentUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isSupport?: boolean;

    @Field(() => UserUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput;

    @Field(() => TicketUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    tickets?: TicketUncheckedCreateNestedManyWithoutDepartmentInput;
}
