import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedManyWithoutDepartmentInput } from '../profile/profile-create-nested-many-without-department.input';
import { TicketTransactionCreateNestedManyWithoutFromDepartmentInput } from '../ticket-transaction/ticket-transaction-create-nested-many-without-from-department.input';

@InputType()
export class DepartmentCreateWithoutTicketsToInput {

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
}
