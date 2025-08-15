import { Posts } from '@/generated/posts/posts.model';
import { Meta } from '@/shared/common/entities/pagination-meta';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostsList {
  @Field(() => [Posts])
  data: Posts;

  @Field(() => Meta, { nullable: true })
  meta: Meta;
}
