import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { CreateCommentInput } from './dto/comment.input';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';
import { Comment } from 'src/@generated/comment/comment.model';
import { CurrentUser } from 'src/common/decorator/currentUser.decorator';
import { DecodedToken } from 'src/common/types/decodedToken';

@Resolver()
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  // Add a new `createComment` mutation here
  @Mutation(() => GeneralMsg)
  async createComment(
    @Args('payload') payload: CreateCommentInput,
    @CurrentUser() userInfo: DecodedToken,
  ) {
    return this.commentService.createComment(payload,userInfo);
  }

  // Add a new `findCommentbyTicketId` query here
  @Query(() => [Comment])
  async findCommentbyTicketId(@Args('ticketId') ticketId: string) {
    return this.commentService.findCommentbyTicketId(ticketId);
  }
}
