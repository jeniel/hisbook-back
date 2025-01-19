import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCategoryWhereInput } from './ticket-category-where.input';
import { Type } from 'class-transformer';
import { TicketCategoryUpdateWithoutTicketTransactionInput } from './ticket-category-update-without-ticket-transaction.input';

@InputType()
export class TicketCategoryUpdateToOneWithWhereWithoutTicketTransactionInput {

    @Field(() => TicketCategoryWhereInput, {nullable:true})
    @Type(() => TicketCategoryWhereInput)
    where?: TicketCategoryWhereInput;

    @Field(() => TicketCategoryUpdateWithoutTicketTransactionInput, {nullable:false})
    @Type(() => TicketCategoryUpdateWithoutTicketTransactionInput)
    data!: TicketCategoryUpdateWithoutTicketTransactionInput;
}
