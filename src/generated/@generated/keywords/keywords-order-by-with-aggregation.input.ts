import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { keywordsCountOrderByAggregateInput } from './keywords-count-order-by-aggregate.input';
import { keywordsAvgOrderByAggregateInput } from './keywords-avg-order-by-aggregate.input';
import { keywordsMaxOrderByAggregateInput } from './keywords-max-order-by-aggregate.input';
import { keywordsMinOrderByAggregateInput } from './keywords-min-order-by-aggregate.input';
import { keywordsSumOrderByAggregateInput } from './keywords-sum-order-by-aggregate.input';

@InputType()
export class keywordsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    keyword?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    count?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    tenantId?: SortOrderInput;

    @Field(() => keywordsCountOrderByAggregateInput, {nullable:true})
    _count?: keywordsCountOrderByAggregateInput;

    @Field(() => keywordsAvgOrderByAggregateInput, {nullable:true})
    _avg?: keywordsAvgOrderByAggregateInput;

    @Field(() => keywordsMaxOrderByAggregateInput, {nullable:true})
    _max?: keywordsMaxOrderByAggregateInput;

    @Field(() => keywordsMinOrderByAggregateInput, {nullable:true})
    _min?: keywordsMinOrderByAggregateInput;

    @Field(() => keywordsSumOrderByAggregateInput, {nullable:true})
    _sum?: keywordsSumOrderByAggregateInput;
}
