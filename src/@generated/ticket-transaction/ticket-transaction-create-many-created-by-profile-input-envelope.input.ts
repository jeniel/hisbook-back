import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateManyCreatedByProfileInput } from './ticket-transaction-create-many-created-by-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class TicketTransactionCreateManyCreatedByProfileInputEnvelope {

    @Field(() => [TicketTransactionCreateManyCreatedByProfileInput], {nullable:false})
    @Type(() => TicketTransactionCreateManyCreatedByProfileInput)
    data!: Array<TicketTransactionCreateManyCreatedByProfileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
