import { Module } from '@nestjs/common';
import { PostResolver } from '@/modules/global/post/post.resolver';
import { PostService } from '@/modules/global/post/post.service';

@Module({
  providers: [PostResolver, PostService],
})
export class PostModule {}
