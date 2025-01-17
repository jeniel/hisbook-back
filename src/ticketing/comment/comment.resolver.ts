import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { CreateCommentInput } from './dto/comment.input';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';

@Resolver()
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  // Add a new `createComment` mutation here
  @Mutation(() => GeneralMsg)
  async createComment(@Args('payload') payload: CreateCommentInput) {
    return this.commentService.createComment(payload);
  }
}
