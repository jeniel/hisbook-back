import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionScalarWhereInput } from './ticket-transaction-scalar-where.input';
import { Type } from 'class-transformer';
import { TicketTransactionUpdateManyMutationInput } from './ticket-transaction-update-many-mutation.input';

@InputType()
export class TicketTransactionUpdateManyWithWhereWithoutAssignedByProfileInput {

    @Field(() => TicketTransactionScalarWhereInput, {nullable:false})
    @Type(() => TicketTransactionScalarWhereInput)
    where!: TicketTransactionScalarWhereInput;

    @Field(() => TicketTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => TicketTransactionUpdateManyMutationInput)
    data!: TicketTransactionUpdateManyMutationInput;
}
