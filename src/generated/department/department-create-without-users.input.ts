import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateNestedManyWithoutDepartmentInput } from '../ticket/ticket-create-nested-many-without-department.input';

@InputType()
export class DepartmentCreateWithoutUsersInput {

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

    @Field(() => TicketCreateNestedManyWithoutDepartmentInput, {nullable:true})
    tickets?: TicketCreateNestedManyWithoutDepartmentInput;
}
