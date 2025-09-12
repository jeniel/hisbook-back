import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AuditLogCountOrderByAggregateInput } from './audit-log-count-order-by-aggregate.input';
import { AuditLogMaxOrderByAggregateInput } from './audit-log-max-order-by-aggregate.input';
import { AuditLogMinOrderByAggregateInput } from './audit-log-min-order-by-aggregate.input';

@InputType()
export class AuditLogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    action?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    remarks?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    timestamp?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    updatedBy?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ticketId?: SortOrderInput;

    @Field(() => AuditLogCountOrderByAggregateInput, {nullable:true})
    _count?: AuditLogCountOrderByAggregateInput;

    @Field(() => AuditLogMaxOrderByAggregateInput, {nullable:true})
    _max?: AuditLogMaxOrderByAggregateInput;

    @Field(() => AuditLogMinOrderByAggregateInput, {nullable:true})
    _min?: AuditLogMinOrderByAggregateInput;
}
