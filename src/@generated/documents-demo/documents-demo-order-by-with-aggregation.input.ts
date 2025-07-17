import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { documents_demoCountOrderByAggregateInput } from './documents-demo-count-order-by-aggregate.input';
import { documents_demoAvgOrderByAggregateInput } from './documents-demo-avg-order-by-aggregate.input';
import { documents_demoMaxOrderByAggregateInput } from './documents-demo-max-order-by-aggregate.input';
import { documents_demoMinOrderByAggregateInput } from './documents-demo-min-order-by-aggregate.input';
import { documents_demoSumOrderByAggregateInput } from './documents-demo-sum-order-by-aggregate.input';

@InputType()
export class documents_demoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    content?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => documents_demoCountOrderByAggregateInput, {nullable:true})
    _count?: documents_demoCountOrderByAggregateInput;

    @Field(() => documents_demoAvgOrderByAggregateInput, {nullable:true})
    _avg?: documents_demoAvgOrderByAggregateInput;

    @Field(() => documents_demoMaxOrderByAggregateInput, {nullable:true})
    _max?: documents_demoMaxOrderByAggregateInput;

    @Field(() => documents_demoMinOrderByAggregateInput, {nullable:true})
    _min?: documents_demoMinOrderByAggregateInput;

    @Field(() => documents_demoSumOrderByAggregateInput, {nullable:true})
    _sum?: documents_demoSumOrderByAggregateInput;
}
