import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateManyAssignedByProfileInput } from './ticket-transaction-create-many-assigned-by-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class TicketTransactionCreateManyAssignedByProfileInputEnvelope {

    @Field(() => [TicketTransactionCreateManyAssignedByProfileInput], {nullable:false})
    @Type(() => TicketTransactionCreateManyAssignedByProfileInput)
    data!: Array<TicketTransactionCreateManyAssignedByProfileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
