import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketTransactionUpdateManyMutationInput } from './ticket-transaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TicketTransactionWhereInput } from './ticket-transaction-where.input';

@ArgsType()
export class UpdateManyTicketTransactionArgs {

    @Field(() => TicketTransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => TicketTransactionUpdateManyMutationInput)
    data!: TicketTransactionUpdateManyMutationInput;

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    @Type(() => TicketTransactionWhereInput)
    where?: TicketTransactionWhereInput;
}
