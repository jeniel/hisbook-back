import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { TicketCountAggregate } from './ticket-count-aggregate.output';
import { TicketAvgAggregate } from './ticket-avg-aggregate.output';
import { TicketSumAggregate } from './ticket-sum-aggregate.output';
import { TicketMinAggregate } from './ticket-min-aggregate.output';
import { TicketMaxAggregate } from './ticket-max-aggregate.output';

@ObjectType()
export class TicketGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    seq!: number;

    @Field(() => String, {nullable:true})
    ticketId?: string;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => Date, {nullable:true})
    missedAt?: Date | string;

    @Field(() => String, {nullable:true})
    floor?: string;

    @Field(() => String, {nullable:true})
    screenshot?: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => String, {nullable:true})
    serialNumber?: string;

    @Field(() => Status, {nullable:false})
    status!: `${Status}`;

    @Field(() => String, {nullable:true})
    remarks?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => String, {nullable:false})
    departmentId!: string;

    @Field(() => TicketCountAggregate, {nullable:true})
    _count?: TicketCountAggregate;

    @Field(() => TicketAvgAggregate, {nullable:true})
    _avg?: TicketAvgAggregate;

    @Field(() => TicketSumAggregate, {nullable:true})
    _sum?: TicketSumAggregate;

    @Field(() => TicketMinAggregate, {nullable:true})
    _min?: TicketMinAggregate;

    @Field(() => TicketMaxAggregate, {nullable:true})
    _max?: TicketMaxAggregate;
}
