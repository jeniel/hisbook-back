import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketTransactionCreateManyInput } from './ticket-transaction-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTicketTransactionArgs {

    @Field(() => [TicketTransactionCreateManyInput], {nullable:false})
    @Type(() => TicketTransactionCreateManyInput)
    data!: Array<TicketTransactionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
