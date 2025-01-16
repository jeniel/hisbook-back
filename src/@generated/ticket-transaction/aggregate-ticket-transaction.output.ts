import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TicketTransactionCountAggregate } from './ticket-transaction-count-aggregate.output';
import { TicketTransactionMinAggregate } from './ticket-transaction-min-aggregate.output';
import { TicketTransactionMaxAggregate } from './ticket-transaction-max-aggregate.output';

@ObjectType()
export class AggregateTicketTransaction {

    @Field(() => TicketTransactionCountAggregate, {nullable:true})
    _count?: TicketTransactionCountAggregate;

    @Field(() => TicketTransactionMinAggregate, {nullable:true})
    _min?: TicketTransactionMinAggregate;

    @Field(() => TicketTransactionMaxAggregate, {nullable:true})
    _max?: TicketTransactionMaxAggregate;
}
