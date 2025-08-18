import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MissedLogoutTicketCountOrderByAggregateInput } from './missed-logout-ticket-count-order-by-aggregate.input';
import { MissedLogoutTicketMaxOrderByAggregateInput } from './missed-logout-ticket-max-order-by-aggregate.input';
import { MissedLogoutTicketMinOrderByAggregateInput } from './missed-logout-ticket-min-order-by-aggregate.input';

@InputType()
export class MissedLogoutTicketOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    subject?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    missedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    floor?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    screenshot?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    remarks?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updatedBy?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    createdById?: SortOrderInput;

    @Field(() => MissedLogoutTicketCountOrderByAggregateInput, {nullable:true})
    _count?: MissedLogoutTicketCountOrderByAggregateInput;

    @Field(() => MissedLogoutTicketMaxOrderByAggregateInput, {nullable:true})
    _max?: MissedLogoutTicketMaxOrderByAggregateInput;

    @Field(() => MissedLogoutTicketMinOrderByAggregateInput, {nullable:true})
    _min?: MissedLogoutTicketMinOrderByAggregateInput;
}
