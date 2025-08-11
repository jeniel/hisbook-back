import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ImagesCountOrderByAggregateInput } from './images-count-order-by-aggregate.input';
import { ImagesMaxOrderByAggregateInput } from './images-max-order-by-aggregate.input';
import { ImagesMinOrderByAggregateInput } from './images-min-order-by-aggregate.input';

@InputType()
export class ImagesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    postId?: `${SortOrder}`;

    @Field(() => ImagesCountOrderByAggregateInput, {nullable:true})
    _count?: ImagesCountOrderByAggregateInput;

    @Field(() => ImagesMaxOrderByAggregateInput, {nullable:true})
    _max?: ImagesMaxOrderByAggregateInput;

    @Field(() => ImagesMinOrderByAggregateInput, {nullable:true})
    _min?: ImagesMinOrderByAggregateInput;
}
