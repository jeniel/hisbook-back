import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DepartmentOrderByWithRelationInput } from '../department/department-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { TicketTransactionOrderByRelationAggregateInput } from '../ticket-transaction/ticket-transaction-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';

@InputType()
export class ProfileOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    firstName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    middleName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    lastName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    designation?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    employeeID?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    dateHired?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    birthDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    address?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contact?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    departmentId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdBy?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedBy?: SortOrderInput;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    department?: DepartmentOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => TicketTransactionOrderByRelationAggregateInput, {nullable:true})
    ticketCreatedBy?: TicketTransactionOrderByRelationAggregateInput;

    @Field(() => TicketTransactionOrderByRelationAggregateInput, {nullable:true})
    ticketAssignedTo?: TicketTransactionOrderByRelationAggregateInput;

    @Field(() => TicketTransactionOrderByRelationAggregateInput, {nullable:true})
    ticketAssignedBy?: TicketTransactionOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comment?: CommentOrderByRelationAggregateInput;
}
