import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionUncheckedCreateNestedManyWithoutTicketCategoryInput } from '../ticket-transaction/ticket-transaction-unchecked-create-nested-many-without-ticket-category.input';

@InputType()
export class TicketCategoryUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => TicketTransactionUncheckedCreateNestedManyWithoutTicketCategoryInput, {nullable:true})
    ticketTransaction?: TicketTransactionUncheckedCreateNestedManyWithoutTicketCategoryInput;
}
