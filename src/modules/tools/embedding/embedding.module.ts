import { Module } from '@nestjs/common';
import { EmbeddingService } from '@/modules/tools/embedding/embedding.service';
import { EmbeddingResolver } from '@/modules/tools/embedding/embedding.resolver';

@Module({
  providers: [EmbeddingResolver, EmbeddingService],
  exports: [EmbeddingService],
})
export class EmbeddingModule {}
