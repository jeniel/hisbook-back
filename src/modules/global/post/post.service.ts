import { PrismaService } from '@/core/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

// Import DTO and ARGS
import { PostsArgs } from '@/modules/global/post/args/post.args';
import { CreatePostInput } from '@/modules/global/post/dto/create-post.input';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  // Create A Post
  async create(dto: CreatePostInput) {
    const posts = await this.prisma.posts.create({
      data: {
        content: dto.content,
        images:
          dto.images && dto.images.length > 0
            ? {
                create: dto.images.map((url) => ({ url })),
              }
            : undefined,
      },
      include: {
        images: true, // return images in response
      },
    });

    return {
      message: 'Post created successfully',
      data: posts,
    };
  }

  // Find All Posts
  async findAll(args: PostsArgs) {
    const page = args.page || 1;
    const perPage = args.perPage || 10;
    const skip = page > 0 ? perPage * (page - 1) : 0;

    const [total, data] = await Promise.all([
      this.prisma.posts.count({ where: args.where }),
      this.prisma.posts.findMany({
        where: args.where,
        take: perPage,
        skip,
        orderBy: {
          datePosted: 'desc',
        },
      }),
    ]);

    const lastPage = Math.ceil(total / perPage);

    return {
      data,
      meta: {
        total,
        lastPage,
        currentPage: page,
        perPage,
        prev: page > 1 ? page - 1 : null,
        next: page < lastPage ? page + 1 : null,
      },
    };
  }

  // Delete Post
  async delete(id: string) {
    await this.prisma.posts.delete({
      where: { id },
    });

    return {
      message: 'Post deleted successfully',
      success: true,
    };
  }
}
