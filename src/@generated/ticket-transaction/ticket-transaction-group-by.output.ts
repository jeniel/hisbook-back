import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TicketStatus } from '../prisma/ticket-status.enum';
import { TicketPriority } from '../prisma/ticket-priority.enum';
import { TicketTransactionCountAggregate } from './ticket-transaction-count-aggregate.output';
import { TicketTransactionMinAggregate } from './ticket-transaction-min-aggregate.output';
import { TicketTransactionMaxAggregate } from './ticket-transaction-max-aggregate.output';

@ObjectType()
export class TicketTransactionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => TicketStatus, {nullable:true})
    status?: keyof typeof TicketStatus;

    @Field(() => TicketPriority, {nullable:true})
    priority?: keyof typeof TicketPriority;

    @Field(() => String, {nullable:true})
    departmentFrom?: string;

    @Field(() => String, {nullable:true})
    departmentTo?: string;

    @Field(() => String, {nullable:true})
    ticketCreatedBy?: string;

    @Field(() => String, {nullable:true})
    ticketAssignedTo?: string;

    @Field(() => String, {nullable:true})
    ticketCategoryId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => TicketTransactionCountAggregate, {nullable:true})
    _count?: TicketTransactionCountAggregate;

    @Field(() => TicketTransactionMinAggregate, {nullable:true})
    _min?: TicketTransactionMinAggregate;

    @Field(() => TicketTransactionMaxAggregate, {nullable:true})
    _max?: TicketTransactionMaxAggregate;
}
