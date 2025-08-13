import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { PostsOrderByRelationAggregateInput } from '../posts/posts-order-by-relation-aggregate.input';
import { MissedLogoutTicketOrderByRelationAggregateInput } from '../missed-logout-ticket/missed-logout-ticket-order-by-relation-aggregate.input';
import { DepartmentOrderByWithRelationInput } from '../department/department-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    hashedPassword?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    hashedRefreshToken?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    role?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    departmentId?: SortOrderInput;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;

    @Field(() => PostsOrderByRelationAggregateInput, {nullable:true})
    posts?: PostsOrderByRelationAggregateInput;

    @Field(() => MissedLogoutTicketOrderByRelationAggregateInput, {nullable:true})
    MissedLogoutTicket?: MissedLogoutTicketOrderByRelationAggregateInput;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    department?: DepartmentOrderByWithRelationInput;
}
