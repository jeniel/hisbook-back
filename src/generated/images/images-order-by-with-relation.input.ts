import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PostsOrderByWithRelationInput } from '../posts/posts-order-by-with-relation.input';

@InputType()
export class ImagesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    postId?: `${SortOrder}`;

    @Field(() => PostsOrderByWithRelationInput, {nullable:true})
    post?: PostsOrderByWithRelationInput;
}
