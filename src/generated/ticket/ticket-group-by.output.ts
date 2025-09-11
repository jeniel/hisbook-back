import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { TicketCountAggregate } from './ticket-count-aggregate.output';
import { TicketMinAggregate } from './ticket-min-aggregate.output';
import { TicketMaxAggregate } from './ticket-max-aggregate.output';

@ObjectType()
export class TicketGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

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

    @Field(() => String, {nullable:false})
    createdById!: string;

    @Field(() => String, {nullable:false})
    departmentId!: string;

    @Field(() => TicketCountAggregate, {nullable:true})
    _count?: TicketCountAggregate;

    @Field(() => TicketMinAggregate, {nullable:true})
    _min?: TicketMinAggregate;

    @Field(() => TicketMaxAggregate, {nullable:true})
    _max?: TicketMaxAggregate;
}
