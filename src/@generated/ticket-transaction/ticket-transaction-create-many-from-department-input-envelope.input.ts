import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateManyFromDepartmentInput } from './ticket-transaction-create-many-from-department.input';
import { Type } from 'class-transformer';

@InputType()
export class TicketTransactionCreateManyFromDepartmentInputEnvelope {

    @Field(() => [TicketTransactionCreateManyFromDepartmentInput], {nullable:false})
    @Type(() => TicketTransactionCreateManyFromDepartmentInput)
    data!: Array<TicketTransactionCreateManyFromDepartmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
