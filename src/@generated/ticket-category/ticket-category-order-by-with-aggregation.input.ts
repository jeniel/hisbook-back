import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TicketCategoryCountOrderByAggregateInput } from './ticket-category-count-order-by-aggregate.input';
import { TicketCategoryMaxOrderByAggregateInput } from './ticket-category-max-order-by-aggregate.input';
import { TicketCategoryMinOrderByAggregateInput } from './ticket-category-min-order-by-aggregate.input';

@InputType()
export class TicketCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => TicketCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: TicketCategoryCountOrderByAggregateInput;

    @Field(() => TicketCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: TicketCategoryMaxOrderByAggregateInput;

    @Field(() => TicketCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: TicketCategoryMinOrderByAggregateInput;
}
