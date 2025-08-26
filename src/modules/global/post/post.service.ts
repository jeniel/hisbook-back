import { PrismaService } from '@/core/database/prisma/prisma.service';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

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
        images: dto.images && dto.images.length > 0 ? dto.images : [],
      },
      include: {
        user: { include: { profile: true } },
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
            include: { profile: true, department: true },
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

  // Find All Posts (with optional userId filter)
  async findAllPostsCreatedByUser(args: PostsArgs & { userId?: string }) {
    const page = args.page ?? 1;
    const perPage = args.perPage ?? 10;
    const skip = (page - 1) * perPage;

    // Build the Prisma "where" filter
    const where = {
      AND: [
        args.where || {}, // any optional filters
        args.userId ? { userId: args.userId } : {}, // enforce userId filter
      ],
    };

    // Fetch total count and data in parallel
    const [total, data] = await Promise.all([
      this.prisma.posts.count({ where }),
      this.prisma.posts.findMany({
        where,
        take: perPage,
        skip,
        include: {
          user: {
            include: { profile: true, department: true },
          },
        },
        orderBy: { datePosted: 'desc' },
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

  // Authentication + Ownership Check on Delete and Update
  // Update Post
  async update(postId: string, data: UpdatePostInput, userId: string) {
    const post = await this.prisma.posts.findUnique({ where: { id: postId } });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    if (post.userId !== userId) {
      throw new ForbiddenException('You do not own this post');
    }

    const updatedPost = await this.prisma.posts.update({
      where: { id: postId },
      data: {
        content: data.content ?? post.content, // keep old content if none provided
        images: data.images ?? post.images, // keep old images if none provided
      },
      include: {
        user: { include: { profile: true } },
      },
    });

    return {
      message: 'Post updated successfully',
      data: updatedPost,
    };
  }

  // Delete Post with manual image cleanup
  async delete(postId: string, currentUserId: string) {
    const post = await this.prisma.posts.findUnique({
      where: { id: postId },
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    if (post.userId !== currentUserId) {
      throw new ForbiddenException('You do not own this post');
    }

    // Delete the post itself
    await this.prisma.posts.delete({
      where: { id: postId },
    });

    return { message: 'Post and its images deleted successfully' };
  }
}
