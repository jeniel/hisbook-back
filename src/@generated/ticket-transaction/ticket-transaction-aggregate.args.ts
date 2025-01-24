import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketTransactionWhereInput } from './ticket-transaction-where.input';
import { Type } from 'class-transformer';
import { TicketTransactionOrderByWithRelationInput } from './ticket-transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TicketTransactionCountAggregateInput } from './ticket-transaction-count-aggregate.input';
import { TicketTransactionMinAggregateInput } from './ticket-transaction-min-aggregate.input';
import { TicketTransactionMaxAggregateInput } from './ticket-transaction-max-aggregate.input';

@ArgsType()
export class TicketTransactionAggregateArgs {

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    @Type(() => TicketTransactionWhereInput)
    where?: TicketTransactionWhereInput;

    @Field(() => [TicketTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TicketTransactionOrderByWithRelationInput>;

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TicketTransactionCountAggregateInput, {nullable:true})
    _count?: TicketTransactionCountAggregateInput;

    @Field(() => TicketTransactionMinAggregateInput, {nullable:true})
    _min?: TicketTransactionMinAggregateInput;

    @Field(() => TicketTransactionMaxAggregateInput, {nullable:true})
    _max?: TicketTransactionMaxAggregateInput;
}
