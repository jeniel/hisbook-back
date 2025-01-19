import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateManyToDepartmentInput } from './ticket-transaction-create-many-to-department.input';
import { Type } from 'class-transformer';

@InputType()
export class TicketTransactionCreateManyToDepartmentInputEnvelope {

    @Field(() => [TicketTransactionCreateManyToDepartmentInput], {nullable:false})
    @Type(() => TicketTransactionCreateManyToDepartmentInput)
    data!: Array<TicketTransactionCreateManyToDepartmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
