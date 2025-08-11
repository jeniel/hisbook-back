import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Posts } from '../posts/posts.model';

@ObjectType()
export class Images {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:false})
    postId!: string;

    @Field(() => Posts, {nullable:false})
    post?: Posts;
}
