import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { TicketOrderByRelationAggregateInput } from '../ticket/ticket-order-by-relation-aggregate.input';

@InputType()
export class DepartmentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isSupport?: `${SortOrder}`;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    users?: UserOrderByRelationAggregateInput;

    @Field(() => TicketOrderByRelationAggregateInput, {nullable:true})
    tickets?: TicketOrderByRelationAggregateInput;
}
