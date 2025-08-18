import { AuthModule } from '@/core/auth/auth.module';
import { PostResolver } from '@/modules/global/post/post.resolver';
import { PostService } from '@/modules/global/post/post.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthModule],
  providers: [PostResolver, PostService],
})
export class PostModule {}
