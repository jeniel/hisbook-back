import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { PostsOrderByRelationAggregateInput } from '../posts/posts-order-by-relation-aggregate.input';
import { TicketOrderByRelationAggregateInput } from '../ticket/ticket-order-by-relation-aggregate.input';
import { AuditLogOrderByRelationAggregateInput } from '../audit-log/audit-log-order-by-relation-aggregate.input';
import { DepartmentOrderByWithRelationInput } from '../department/department-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    hashedRefreshToken?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    createdAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    departmentId?: SortOrderInput;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;

    @Field(() => PostsOrderByRelationAggregateInput, {nullable:true})
    posts?: PostsOrderByRelationAggregateInput;

    @Field(() => TicketOrderByRelationAggregateInput, {nullable:true})
    tickets?: TicketOrderByRelationAggregateInput;

    @Field(() => AuditLogOrderByRelationAggregateInput, {nullable:true})
    auditLogs?: AuditLogOrderByRelationAggregateInput;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    department?: DepartmentOrderByWithRelationInput;
}
