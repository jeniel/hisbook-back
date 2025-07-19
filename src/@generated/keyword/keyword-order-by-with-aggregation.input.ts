import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { KeywordCountOrderByAggregateInput } from './keyword-count-order-by-aggregate.input';
import { KeywordAvgOrderByAggregateInput } from './keyword-avg-order-by-aggregate.input';
import { KeywordMaxOrderByAggregateInput } from './keyword-max-order-by-aggregate.input';
import { KeywordMinOrderByAggregateInput } from './keyword-min-order-by-aggregate.input';
import { KeywordSumOrderByAggregateInput } from './keyword-sum-order-by-aggregate.input';

@InputType()
export class KeywordOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    keyword?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    count?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    tenantId?: `${SortOrder}`;

    @Field(() => KeywordCountOrderByAggregateInput, {nullable:true})
    _count?: KeywordCountOrderByAggregateInput;

    @Field(() => KeywordAvgOrderByAggregateInput, {nullable:true})
    _avg?: KeywordAvgOrderByAggregateInput;

    @Field(() => KeywordMaxOrderByAggregateInput, {nullable:true})
    _max?: KeywordMaxOrderByAggregateInput;

    @Field(() => KeywordMinOrderByAggregateInput, {nullable:true})
    _min?: KeywordMinOrderByAggregateInput;

    @Field(() => KeywordSumOrderByAggregateInput, {nullable:true})
    _sum?: KeywordSumOrderByAggregateInput;
}
