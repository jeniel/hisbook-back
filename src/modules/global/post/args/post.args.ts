import { PostsWhereInput } from '@/generated/posts/posts-where.input';
import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class PostsArgs {
  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  perPage?: number;

  @Field(() => PostsWhereInput, { nullable: true })
  @Type(() => PostsWhereInput)
  where?: PostsWhereInput;
}
