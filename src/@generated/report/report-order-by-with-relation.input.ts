import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TenantOrderByWithRelationInput } from '../tenant/tenant-order-by-with-relation.input';

@InputType()
export class ReportOrderByWithRelationInput {

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

    @Field(() => SortOrderInput, {nullable:true})
    count?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    keyword?: SortOrderInput;

    @Field(() => TenantOrderByWithRelationInput, {nullable:true})
    tenant?: TenantOrderByWithRelationInput;
}
