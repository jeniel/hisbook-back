import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentInput } from './dto/comment.input';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async createComment(payload: CreateCommentInput) {
    return await this.prisma.comment.create({
      data:payload
    });
  }
}
