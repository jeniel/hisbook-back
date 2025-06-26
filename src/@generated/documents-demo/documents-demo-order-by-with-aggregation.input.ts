import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { documents_demoCountOrderByAggregateInput } from './documents-demo-count-order-by-aggregate.input';
import { documents_demoMaxOrderByAggregateInput } from './documents-demo-max-order-by-aggregate.input';
import { documents_demoMinOrderByAggregateInput } from './documents-demo-min-order-by-aggregate.input';

@InputType()
export class documents_demoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    content?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => documents_demoCountOrderByAggregateInput, {nullable:true})
    _count?: documents_demoCountOrderByAggregateInput;

    @Field(() => documents_demoMaxOrderByAggregateInput, {nullable:true})
    _max?: documents_demoMaxOrderByAggregateInput;

    @Field(() => documents_demoMinOrderByAggregateInput, {nullable:true})
    _min?: documents_demoMinOrderByAggregateInput;
}
