import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionUncheckedCreateNestedManyWithoutFromDepartmentInput } from '../ticket-transaction/ticket-transaction-unchecked-create-nested-many-without-from-department.input';
import { TicketTransactionUncheckedCreateNestedManyWithoutToDepartmentInput } from '../ticket-transaction/ticket-transaction-unchecked-create-nested-many-without-to-department.input';

@InputType()
export class DepartmentUncheckedCreateWithoutProfileInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => TicketTransactionUncheckedCreateNestedManyWithoutFromDepartmentInput, {nullable:true})
    ticketsFrom?: TicketTransactionUncheckedCreateNestedManyWithoutFromDepartmentInput;

    @Field(() => TicketTransactionUncheckedCreateNestedManyWithoutToDepartmentInput, {nullable:true})
    ticketsTo?: TicketTransactionUncheckedCreateNestedManyWithoutToDepartmentInput;
}
