import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { documents_beckerCountOrderByAggregateInput } from './documents-becker-count-order-by-aggregate.input';
import { documents_beckerMaxOrderByAggregateInput } from './documents-becker-max-order-by-aggregate.input';
import { documents_beckerMinOrderByAggregateInput } from './documents-becker-min-order-by-aggregate.input';

@InputType()
export class documents_beckerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    content?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => documents_beckerCountOrderByAggregateInput, {nullable:true})
    _count?: documents_beckerCountOrderByAggregateInput;

    @Field(() => documents_beckerMaxOrderByAggregateInput, {nullable:true})
    _max?: documents_beckerMaxOrderByAggregateInput;

    @Field(() => documents_beckerMinOrderByAggregateInput, {nullable:true})
    _min?: documents_beckerMinOrderByAggregateInput;
}
