import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TicketSubCategoryCountOrderByAggregateInput } from './ticket-sub-category-count-order-by-aggregate.input';
import { TicketSubCategoryMaxOrderByAggregateInput } from './ticket-sub-category-max-order-by-aggregate.input';
import { TicketSubCategoryMinOrderByAggregateInput } from './ticket-sub-category-min-order-by-aggregate.input';

@InputType()
export class TicketSubCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => TicketSubCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: TicketSubCategoryCountOrderByAggregateInput;

    @Field(() => TicketSubCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: TicketSubCategoryMaxOrderByAggregateInput;

    @Field(() => TicketSubCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: TicketSubCategoryMinOrderByAggregateInput;
}
