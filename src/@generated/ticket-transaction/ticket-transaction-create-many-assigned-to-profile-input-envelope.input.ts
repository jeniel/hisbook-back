import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateManyAssignedToProfileInput } from './ticket-transaction-create-many-assigned-to-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class TicketTransactionCreateManyAssignedToProfileInputEnvelope {

    @Field(() => [TicketTransactionCreateManyAssignedToProfileInput], {nullable:false})
    @Type(() => TicketTransactionCreateManyAssignedToProfileInput)
    data!: Array<TicketTransactionCreateManyAssignedToProfileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
