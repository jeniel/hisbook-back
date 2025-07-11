import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { documents_callinboundCountOrderByAggregateInput } from './documents-callinbound-count-order-by-aggregate.input';
import { documents_callinboundAvgOrderByAggregateInput } from './documents-callinbound-avg-order-by-aggregate.input';
import { documents_callinboundMaxOrderByAggregateInput } from './documents-callinbound-max-order-by-aggregate.input';
import { documents_callinboundMinOrderByAggregateInput } from './documents-callinbound-min-order-by-aggregate.input';
import { documents_callinboundSumOrderByAggregateInput } from './documents-callinbound-sum-order-by-aggregate.input';

@InputType()
export class documents_callinboundOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    content?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => documents_callinboundCountOrderByAggregateInput, {nullable:true})
    _count?: documents_callinboundCountOrderByAggregateInput;

    @Field(() => documents_callinboundAvgOrderByAggregateInput, {nullable:true})
    _avg?: documents_callinboundAvgOrderByAggregateInput;

    @Field(() => documents_callinboundMaxOrderByAggregateInput, {nullable:true})
    _max?: documents_callinboundMaxOrderByAggregateInput;

    @Field(() => documents_callinboundMinOrderByAggregateInput, {nullable:true})
    _min?: documents_callinboundMinOrderByAggregateInput;

    @Field(() => documents_callinboundSumOrderByAggregateInput, {nullable:true})
    _sum?: documents_callinboundSumOrderByAggregateInput;
}
