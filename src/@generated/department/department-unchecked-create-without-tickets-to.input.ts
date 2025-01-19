import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUncheckedCreateNestedManyWithoutDepartmentInput } from '../profile/profile-unchecked-create-nested-many-without-department.input';
import { TicketTransactionUncheckedCreateNestedManyWithoutFromDepartmentInput } from '../ticket-transaction/ticket-transaction-unchecked-create-nested-many-without-from-department.input';

@InputType()
export class DepartmentUncheckedCreateWithoutTicketsToInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ProfileUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedManyWithoutDepartmentInput;

    @Field(() => TicketTransactionUncheckedCreateNestedManyWithoutFromDepartmentInput, {nullable:true})
    ticketsFrom?: TicketTransactionUncheckedCreateNestedManyWithoutFromDepartmentInput;
}
