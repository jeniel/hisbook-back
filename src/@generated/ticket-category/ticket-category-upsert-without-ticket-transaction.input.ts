import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCategoryUpdateWithoutTicketTransactionInput } from './ticket-category-update-without-ticket-transaction.input';
import { Type } from 'class-transformer';
import { TicketCategoryCreateWithoutTicketTransactionInput } from './ticket-category-create-without-ticket-transaction.input';
import { TicketCategoryWhereInput } from './ticket-category-where.input';

@InputType()
export class TicketCategoryUpsertWithoutTicketTransactionInput {

    @Field(() => TicketCategoryUpdateWithoutTicketTransactionInput, {nullable:false})
    @Type(() => TicketCategoryUpdateWithoutTicketTransactionInput)
    update!: TicketCategoryUpdateWithoutTicketTransactionInput;

    @Field(() => TicketCategoryCreateWithoutTicketTransactionInput, {nullable:false})
    @Type(() => TicketCategoryCreateWithoutTicketTransactionInput)
    create!: TicketCategoryCreateWithoutTicketTransactionInput;

    @Field(() => TicketCategoryWhereInput, {nullable:true})
    @Type(() => TicketCategoryWhereInput)
    where?: TicketCategoryWhereInput;
}
