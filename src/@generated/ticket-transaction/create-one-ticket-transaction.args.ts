import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketTransactionCreateInput } from './ticket-transaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTicketTransactionArgs {

    @Field(() => TicketTransactionCreateInput, {nullable:true})
    @Type(() => TicketTransactionCreateInput)
    data?: TicketTransactionCreateInput;
}
