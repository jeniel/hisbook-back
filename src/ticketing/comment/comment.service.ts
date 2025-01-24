import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentInput } from './dto/comment.input';
import { DecodedToken } from 'src/common/types/decodedToken';

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
