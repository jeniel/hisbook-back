import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissedLogoutTicketWhereInput } from './missed-logout-ticket-where.input';
import { Type } from 'class-transformer';
import { MissedLogoutTicketOrderByWithRelationInput } from './missed-logout-ticket-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MissedLogoutTicketWhereUniqueInput } from './missed-logout-ticket-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MissedLogoutTicketCountAggregateInput } from './missed-logout-ticket-count-aggregate.input';
import { MissedLogoutTicketMinAggregateInput } from './missed-logout-ticket-min-aggregate.input';
import { MissedLogoutTicketMaxAggregateInput } from './missed-logout-ticket-max-aggregate.input';

@ArgsType()
export class MissedLogoutTicketAggregateArgs {

    @Field(() => MissedLogoutTicketWhereInput, {nullable:true})
    @Type(() => MissedLogoutTicketWhereInput)
    where?: MissedLogoutTicketWhereInput;

    @Field(() => [MissedLogoutTicketOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MissedLogoutTicketOrderByWithRelationInput>;

    @Field(() => MissedLogoutTicketWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MissedLogoutTicketWhereUniqueInput, 'id'>;

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
