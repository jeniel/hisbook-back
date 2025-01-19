import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedManyWithoutDepartmentInput } from '../profile/profile-create-nested-many-without-department.input';
import { TicketTransactionCreateNestedManyWithoutFromDepartmentInput } from '../ticket-transaction/ticket-transaction-create-nested-many-without-from-department.input';
import { TicketTransactionCreateNestedManyWithoutToDepartmentInput } from '../ticket-transaction/ticket-transaction-create-nested-many-without-to-department.input';

@InputType()
export class DepartmentCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ProfileCreateNestedManyWithoutDepartmentInput, {nullable:true})
    profile?: ProfileCreateNestedManyWithoutDepartmentInput;

    @Field(() => TicketTransactionCreateNestedManyWithoutFromDepartmentInput, {nullable:true})
    ticketsFrom?: TicketTransactionCreateNestedManyWithoutFromDepartmentInput;

    @Field(() => TicketTransactionCreateNestedManyWithoutToDepartmentInput, {nullable:true})
    ticketsTo?: TicketTransactionCreateNestedManyWithoutToDepartmentInput;
}
