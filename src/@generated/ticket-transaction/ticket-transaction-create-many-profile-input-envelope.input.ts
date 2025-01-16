import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateManyProfileInput } from './ticket-transaction-create-many-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class TicketTransactionCreateManyProfileInputEnvelope {

    @Field(() => [TicketTransactionCreateManyProfileInput], {nullable:false})
    @Type(() => TicketTransactionCreateManyProfileInput)
    data!: Array<TicketTransactionCreateManyProfileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
