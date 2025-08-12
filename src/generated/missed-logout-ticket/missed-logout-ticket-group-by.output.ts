import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { MissedLogoutTicketCountAggregate } from './missed-logout-ticket-count-aggregate.output';
import { MissedLogoutTicketMinAggregate } from './missed-logout-ticket-min-aggregate.output';
import { MissedLogoutTicketMaxAggregate } from './missed-logout-ticket-max-aggregate.output';

@ObjectType()
export class MissedLogoutTicketGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    missedAt?: Date | string;

    @Field(() => String, {nullable:true})
    floor?: string;

    @Field(() => String, {nullable:true})
    screenshot?: string;

    @Field(() => Status, {nullable:true})
    status?: `${Status}`;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    createdById?: string;

    @Field(() => MissedLogoutTicketCountAggregate, {nullable:true})
    _count?: MissedLogoutTicketCountAggregate;

    @Field(() => MissedLogoutTicketMinAggregate, {nullable:true})
    _min?: MissedLogoutTicketMinAggregate;

    @Field(() => MissedLogoutTicketMaxAggregate, {nullable:true})
    _max?: MissedLogoutTicketMaxAggregate;
}
