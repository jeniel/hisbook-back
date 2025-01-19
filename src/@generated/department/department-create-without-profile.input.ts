import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateNestedManyWithoutFromDepartmentInput } from '../ticket-transaction/ticket-transaction-create-nested-many-without-from-department.input';
import { TicketTransactionCreateNestedManyWithoutToDepartmentInput } from '../ticket-transaction/ticket-transaction-create-nested-many-without-to-department.input';

@InputType()
export class DepartmentCreateWithoutProfileInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => TicketTransactionCreateNestedManyWithoutFromDepartmentInput, {nullable:true})
    ticketsFrom?: TicketTransactionCreateNestedManyWithoutFromDepartmentInput;

    @Field(() => TicketTransactionCreateNestedManyWithoutToDepartmentInput, {nullable:true})
    ticketsTo?: TicketTransactionCreateNestedManyWithoutToDepartmentInput;
}
