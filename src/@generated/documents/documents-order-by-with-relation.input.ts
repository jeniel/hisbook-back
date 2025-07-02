import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { TenantOrderByWithRelationInput } from '../tenant/tenant-order-by-with-relation.input';

@InputType()
export class documentsOrderByWithRelationInput {

    @Field(() => SortOrderInput, {nullable:true})
    content?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    tenantId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    client_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => TenantOrderByWithRelationInput, {nullable:true})
    tenant?: TenantOrderByWithRelationInput;
}
