import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { documentsCountOrderByAggregateInput } from './documents-count-order-by-aggregate.input';
import { documentsMaxOrderByAggregateInput } from './documents-max-order-by-aggregate.input';
import { documentsMinOrderByAggregateInput } from './documents-min-order-by-aggregate.input';

@InputType()
export class documentsOrderByWithAggregationInput {

    @Field(() => SortOrderInput, {nullable:true})
    content?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    tenantId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    client_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => documentsCountOrderByAggregateInput, {nullable:true})
    _count?: documentsCountOrderByAggregateInput;

    @Field(() => documentsMaxOrderByAggregateInput, {nullable:true})
    _max?: documentsMaxOrderByAggregateInput;

    @Field(() => documentsMinOrderByAggregateInput, {nullable:true})
    _min?: documentsMinOrderByAggregateInput;
}
