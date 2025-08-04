import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { keyword_dailyCountOrderByAggregateInput } from './keyword-daily-count-order-by-aggregate.input';
import { keyword_dailyAvgOrderByAggregateInput } from './keyword-daily-avg-order-by-aggregate.input';
import { keyword_dailyMaxOrderByAggregateInput } from './keyword-daily-max-order-by-aggregate.input';
import { keyword_dailyMinOrderByAggregateInput } from './keyword-daily-min-order-by-aggregate.input';
import { keyword_dailySumOrderByAggregateInput } from './keyword-daily-sum-order-by-aggregate.input';

@InputType()
export class keyword_dailyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    keyword?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    count?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    date?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    tenantId?: SortOrderInput;

    @Field(() => keyword_dailyCountOrderByAggregateInput, {nullable:true})
    _count?: keyword_dailyCountOrderByAggregateInput;

    @Field(() => keyword_dailyAvgOrderByAggregateInput, {nullable:true})
    _avg?: keyword_dailyAvgOrderByAggregateInput;

    @Field(() => keyword_dailyMaxOrderByAggregateInput, {nullable:true})
    _max?: keyword_dailyMaxOrderByAggregateInput;

    @Field(() => keyword_dailyMinOrderByAggregateInput, {nullable:true})
    _min?: keyword_dailyMinOrderByAggregateInput;

    @Field(() => keyword_dailySumOrderByAggregateInput, {nullable:true})
    _sum?: keyword_dailySumOrderByAggregateInput;
}
