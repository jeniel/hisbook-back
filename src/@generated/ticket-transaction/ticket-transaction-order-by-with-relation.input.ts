import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { DepartmentOrderByWithRelationInput } from '../department/department-order-by-with-relation.input';
import { TicketCategoryOrderByWithRelationInput } from '../ticket-category/ticket-category-order-by-with-relation.input';

@InputType()
export class TicketTransactionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    title?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    priority?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    departmentFrom?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    departmentTo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ticketCreatedBy?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ticketAssignedTo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ticketCategoryId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdBy?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedBy?: SortOrderInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comment?: CommentOrderByRelationAggregateInput;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    createdByProfile?: ProfileOrderByWithRelationInput;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    assignedToProfile?: ProfileOrderByWithRelationInput;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    fromDepartment?: DepartmentOrderByWithRelationInput;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    toDepartment?: DepartmentOrderByWithRelationInput;

    @Field(() => TicketCategoryOrderByWithRelationInput, {nullable:true})
    ticketCategory?: TicketCategoryOrderByWithRelationInput;
}
