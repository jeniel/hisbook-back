import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateNestedManyWithoutTicketCategoryInput } from '../ticket-transaction/ticket-transaction-create-nested-many-without-ticket-category.input';

@InputType()
export class TicketCategoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => TicketTransactionCreateNestedManyWithoutTicketCategoryInput, {nullable:true})
    ticketTransaction?: TicketTransactionCreateNestedManyWithoutTicketCategoryInput;
}
