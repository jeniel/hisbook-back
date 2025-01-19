import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateManyTicketCategoryInput } from './ticket-transaction-create-many-ticket-category.input';
import { Type } from 'class-transformer';

@InputType()
export class TicketTransactionCreateManyTicketCategoryInputEnvelope {

    @Field(() => [TicketTransactionCreateManyTicketCategoryInput], {nullable:false})
    @Type(() => TicketTransactionCreateManyTicketCategoryInput)
    data!: Array<TicketTransactionCreateManyTicketCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
