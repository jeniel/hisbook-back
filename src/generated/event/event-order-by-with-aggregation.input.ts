import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { EventCountOrderByAggregateInput } from './event-count-order-by-aggregate.input';
import { EventMaxOrderByAggregateInput } from './event-max-order-by-aggregate.input';
import { EventMinOrderByAggregateInput } from './event-min-order-by-aggregate.input';

@InputType()
export class EventOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    startDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    endDate?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    location?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    detailsUrl?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => EventCountOrderByAggregateInput, {nullable:true})
    _count?: EventCountOrderByAggregateInput;

    @Field(() => EventMaxOrderByAggregateInput, {nullable:true})
    _max?: EventMaxOrderByAggregateInput;

    @Field(() => EventMinOrderByAggregateInput, {nullable:true})
    _min?: EventMinOrderByAggregateInput;
}
