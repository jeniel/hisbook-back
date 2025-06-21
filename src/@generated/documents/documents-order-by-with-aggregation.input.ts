import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { documentsCountOrderByAggregateInput } from './documents-count-order-by-aggregate.input';
import { documentsAvgOrderByAggregateInput } from './documents-avg-order-by-aggregate.input';
import { documentsMaxOrderByAggregateInput } from './documents-max-order-by-aggregate.input';
import { documentsMinOrderByAggregateInput } from './documents-min-order-by-aggregate.input';
import { documentsSumOrderByAggregateInput } from './documents-sum-order-by-aggregate.input';

@InputType()
export class documentsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    content?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    tenantId?: SortOrderInput;

    @Field(() => documentsCountOrderByAggregateInput, {nullable:true})
    _count?: documentsCountOrderByAggregateInput;

    @Field(() => documentsAvgOrderByAggregateInput, {nullable:true})
    _avg?: documentsAvgOrderByAggregateInput;

    @Field(() => documentsMaxOrderByAggregateInput, {nullable:true})
    _max?: documentsMaxOrderByAggregateInput;

    @Field(() => documentsMinOrderByAggregateInput, {nullable:true})
    _min?: documentsMinOrderByAggregateInput;

    @Field(() => documentsSumOrderByAggregateInput, {nullable:true})
    _sum?: documentsSumOrderByAggregateInput;
}
