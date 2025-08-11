import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MissedLogoutTicketCountAggregate } from './missed-logout-ticket-count-aggregate.output';
import { MissedLogoutTicketMinAggregate } from './missed-logout-ticket-min-aggregate.output';
import { MissedLogoutTicketMaxAggregate } from './missed-logout-ticket-max-aggregate.output';

@ObjectType()
export class AggregateMissedLogoutTicket {

    @Field(() => MissedLogoutTicketCountAggregate, {nullable:true})
    _count?: MissedLogoutTicketCountAggregate;

    @Field(() => MissedLogoutTicketMinAggregate, {nullable:true})
    _min?: MissedLogoutTicketMinAggregate;

    @Field(() => MissedLogoutTicketMaxAggregate, {nullable:true})
    _max?: MissedLogoutTicketMaxAggregate;
}
