import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissedLogoutTicketWhereInput } from './missed-logout-ticket-where.input';
import { Type } from 'class-transformer';
import { MissedLogoutTicketOrderByWithAggregationInput } from './missed-logout-ticket-order-by-with-aggregation.input';
import { MissedLogoutTicketScalarFieldEnum } from './missed-logout-ticket-scalar-field.enum';
import { MissedLogoutTicketScalarWhereWithAggregatesInput } from './missed-logout-ticket-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MissedLogoutTicketCountAggregateInput } from './missed-logout-ticket-count-aggregate.input';
import { MissedLogoutTicketMinAggregateInput } from './missed-logout-ticket-min-aggregate.input';
import { MissedLogoutTicketMaxAggregateInput } from './missed-logout-ticket-max-aggregate.input';

@ArgsType()
export class MissedLogoutTicketGroupByArgs {

    @Field(() => MissedLogoutTicketWhereInput, {nullable:true})
    @Type(() => MissedLogoutTicketWhereInput)
    where?: MissedLogoutTicketWhereInput;

    @Field(() => [MissedLogoutTicketOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MissedLogoutTicketOrderByWithAggregationInput>;

    @Field(() => [MissedLogoutTicketScalarFieldEnum], {nullable:false})
    by!: Array<`${MissedLogoutTicketScalarFieldEnum}`>;

    @Field(() => MissedLogoutTicketScalarWhereWithAggregatesInput, {nullable:true})
    having?: MissedLogoutTicketScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MissedLogoutTicketCountAggregateInput, {nullable:true})
    _count?: MissedLogoutTicketCountAggregateInput;

    @Field(() => MissedLogoutTicketMinAggregateInput, {nullable:true})
    _min?: MissedLogoutTicketMinAggregateInput;

    @Field(() => MissedLogoutTicketMaxAggregateInput, {nullable:true})
    _max?: MissedLogoutTicketMaxAggregateInput;
}
