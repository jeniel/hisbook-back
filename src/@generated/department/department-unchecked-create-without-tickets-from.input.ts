import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUncheckedCreateNestedManyWithoutDepartmentInput } from '../profile/profile-unchecked-create-nested-many-without-department.input';
import { TicketTransactionUncheckedCreateNestedManyWithoutToDepartmentInput } from '../ticket-transaction/ticket-transaction-unchecked-create-nested-many-without-to-department.input';

@InputType()
export class DepartmentUncheckedCreateWithoutTicketsFromInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ProfileUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedManyWithoutDepartmentInput;

    @Field(() => TicketTransactionUncheckedCreateNestedManyWithoutToDepartmentInput, {nullable:true})
    ticketsTo?: TicketTransactionUncheckedCreateNestedManyWithoutToDepartmentInput;
}
