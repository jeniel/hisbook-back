import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketTransactionWhereInput } from './ticket-transaction-where.input';
import { Type } from 'class-transformer';
import { TicketTransactionOrderByWithAggregationInput } from './ticket-transaction-order-by-with-aggregation.input';
import { TicketTransactionScalarFieldEnum } from './ticket-transaction-scalar-field.enum';
import { TicketTransactionScalarWhereWithAggregatesInput } from './ticket-transaction-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TicketTransactionCountAggregateInput } from './ticket-transaction-count-aggregate.input';
import { TicketTransactionMinAggregateInput } from './ticket-transaction-min-aggregate.input';
import { TicketTransactionMaxAggregateInput } from './ticket-transaction-max-aggregate.input';

@ArgsType()
export class TicketTransactionGroupByArgs {

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    @Type(() => TicketTransactionWhereInput)
    where?: TicketTransactionWhereInput;

    @Field(() => [TicketTransactionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TicketTransactionOrderByWithAggregationInput>;

    @Field(() => [TicketTransactionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TicketTransactionScalarFieldEnum>;

    @Field(() => TicketTransactionScalarWhereWithAggregatesInput, {nullable:true})
    having?: TicketTransactionScalarWhereWithAggregatesInput;

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
