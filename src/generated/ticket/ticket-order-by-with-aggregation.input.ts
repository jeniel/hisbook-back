import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TicketCountOrderByAggregateInput } from './ticket-count-order-by-aggregate.input';
import { TicketAvgOrderByAggregateInput } from './ticket-avg-order-by-aggregate.input';
import { TicketMaxOrderByAggregateInput } from './ticket-max-order-by-aggregate.input';
import { TicketMinOrderByAggregateInput } from './ticket-min-order-by-aggregate.input';
import { TicketSumOrderByAggregateInput } from './ticket-sum-order-by-aggregate.input';

@InputType()
export class TicketOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    seq?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    ticketId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    subject?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    missedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    floor?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    screenshot?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    message?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    serialNumber?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    remarks?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    updatedBy?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdById?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    departmentId?: `${SortOrder}`;

    @Field(() => TicketCountOrderByAggregateInput, {nullable:true})
    _count?: TicketCountOrderByAggregateInput;

    @Field(() => TicketAvgOrderByAggregateInput, {nullable:true})
    _avg?: TicketAvgOrderByAggregateInput;

    @Field(() => TicketMaxOrderByAggregateInput, {nullable:true})
    _max?: TicketMaxOrderByAggregateInput;

    @Field(() => TicketMinOrderByAggregateInput, {nullable:true})
    _min?: TicketMinOrderByAggregateInput;

    @Field(() => TicketSumOrderByAggregateInput, {nullable:true})
    _sum?: TicketSumOrderByAggregateInput;
}
