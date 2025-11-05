import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { DepartmentOrderByWithRelationInput } from '../department/department-order-by-with-relation.input';
import { AuditLogOrderByRelationAggregateInput } from '../audit-log/audit-log-order-by-relation-aggregate.input';

@InputType()
export class TicketOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subject?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    missedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    floor?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    screenshot?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    message?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    serialNumber?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    remarks?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    updatedBy?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deletedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdById?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    departmentId?: `${SortOrder}`;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    createdBy?: UserOrderByWithRelationInput;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    department?: DepartmentOrderByWithRelationInput;

    @Field(() => AuditLogOrderByRelationAggregateInput, {nullable:true})
    auditLogs?: AuditLogOrderByRelationAggregateInput;
}
