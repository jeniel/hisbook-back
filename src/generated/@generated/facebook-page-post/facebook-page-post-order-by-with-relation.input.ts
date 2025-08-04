import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FacebookPageOrderByWithRelationInput } from '../facebook-page/facebook-page-order-by-with-relation.input';

@InputType()
export class FacebookPagePostOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    message?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    createdTime?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pageId?: `${SortOrder}`;

    @Field(() => FacebookPageOrderByWithRelationInput, {nullable:true})
    page?: FacebookPageOrderByWithRelationInput;
}
