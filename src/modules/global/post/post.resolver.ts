import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Posts } from '@/generated/posts/posts.model';
import { PostsArgs } from '@/modules/global/post/args/post.args';
import { PostsList } from '@/modules/global/post/entities/post.entity';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';

import { CreatePostInput } from './dto/create-post.input';
import { PostService } from './post.service';

@Resolver(() => Posts)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  // Create
  @Mutation(() => GeneralMsg)
  createPost(@Args('payload') payload: CreatePostInput) {
    return this.postService.create(payload);
  }

  // Find All
  @Query(() => PostsList)
  async findAllPosts(@Args() args: PostsArgs) {
    return await this.postService.findAll(args);
  }

  // Delete Post
  @Mutation(() => GeneralMsg)
  deletePost(@Args('id') id: string) {
    return this.postService.delete(id);
  }
}
