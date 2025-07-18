import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TenantOrderByWithRelationInput } from '../tenant/tenant-order-by-with-relation.input';

@InputType()
export class keywordsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    keyword?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    count?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    tenantId?: SortOrderInput;

    @Field(() => TenantOrderByWithRelationInput, {nullable:true})
    tenant?: TenantOrderByWithRelationInput;
}
