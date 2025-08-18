import { PrismaService } from '@/core/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

// Import DTO and ARGS
import { PostsArgs } from '@/modules/global/post/args/post.args';
import { CreatePostInput } from '@/modules/global/post/dto/create-post.input';
import { UpdatePostInput } from '@/modules/global/post/dto/update-post.input';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  // Create A Post
  async create(dto: CreatePostInput) {
    const posts = await this.prisma.posts.create({
      data: {
        content: dto.content,
        userId: dto.userId,
        images: dto.images?.length
          ? { create: dto.images.map((url) => ({ url })) }
          : undefined,
      },
      include: {
        user: { include: { profile: true } },
        images: true,
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
        include: {
          user: {
            include: { profile: true },
          },
        },
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

  // Update Post
  async update(id: string, dto: UpdatePostInput) {
    const updatedPost = await this.prisma.posts.update({
      where: { id },
      data: {
        content: dto.content,
        datePosted: dto.datePosted,
        ...(dto.images
          ? {
              images: {
                deleteMany: {}, // remove existing images
                create: dto.images.map((url) => ({ url })), // add new ones
              },
            }
          : {}),
      },
      include: {
        images: true, // return updated images
      },
    });

    return {
      message: 'Post updated successfully',
      success: true,
      data: updatedPost,
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
