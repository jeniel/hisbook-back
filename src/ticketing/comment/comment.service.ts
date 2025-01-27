import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentInput } from './dto/comment.input';
import { DecodedToken } from 'src/common/types/decodedToken';
import { UpsertCommentInput } from './dto/upsert.input';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async createComment(payload: CreateCommentInput, userInfo: DecodedToken) {
    await this.prisma.comment.create({
      data: {
        ...payload,
        profileId: userInfo.profileId,
      },
    });
    return {
      message: 'Comment created successfully',
    };
  }

  async upsertComment(
    payload: UpsertCommentInput,
    userInfo: DecodedToken,
    commentId: string,
  ) {
    await this.prisma.comment.upsert({
      where: {
        id: commentId,
      },
      create: {
        ...payload,
        profileId: userInfo.profileId,
      },
      update: {
        ...payload,
        profileId: userInfo.profileId,
      },
    });
    return {
      message: 'Comment upserted successfully',
    };
  }

  //delete comment
  async deleteComment(commentId: string) {
    await this.prisma.comment.delete({
      where: {
        id: commentId,
      },
    });
    return {
      message: 'Comment deleted successfully',
    };
  }

  async findCommentbyTicketId(ticketId: string) {
    return await this.prisma.comment.findMany({
      where: {
        ticketId,
      },
      include: {
        profile: true,
        ticket: true,
      },
    });
  }
}
