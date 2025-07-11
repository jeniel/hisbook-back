import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ReportCountOrderByAggregateInput } from './report-count-order-by-aggregate.input';
import { ReportMaxOrderByAggregateInput } from './report-max-order-by-aggregate.input';
import { ReportMinOrderByAggregateInput } from './report-min-order-by-aggregate.input';

@InputType()
export class ReportOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    session_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    keywords?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    message_intent?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    tenantId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    createdBy?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updatedBy?: SortOrderInput;

    @Field(() => ReportCountOrderByAggregateInput, {nullable:true})
    _count?: ReportCountOrderByAggregateInput;

    @Field(() => ReportMaxOrderByAggregateInput, {nullable:true})
    _max?: ReportMaxOrderByAggregateInput;

    @Field(() => ReportMinOrderByAggregateInput, {nullable:true})
    _min?: ReportMinOrderByAggregateInput;
}
