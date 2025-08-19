import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Posts } from '@/generated/posts/posts.model';
import { PostsArgs } from '@/modules/global/post/args/post.args';
import { PostsList } from '@/modules/global/post/entities/post.entity';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';

import { CurrentUser } from '@/shared/common/decorator/currentUser.decorator';
import { AccessTokenGuard } from '@/shared/common/guards/accessToken.guard';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
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

  // Update Post
  @Mutation(() => GeneralMsg)
  @UseGuards(AccessTokenGuard)
  async updatePost(
    @Args('postId') postId: string,
    @Args('data') data: UpdatePostInput,
    @CurrentUser() user: { userId: string },
  ) {
    return this.postService.update(postId, data, user.userId);
  }

  // Delete Post
  @Mutation(() => GeneralMsg)
  @UseGuards(AccessTokenGuard)
  deletePost(
    @Args('postId') postId: string,
    @CurrentUser() user: { userId: string },
  ) {
    return this.postService.delete(postId, user.userId);
  }
}
