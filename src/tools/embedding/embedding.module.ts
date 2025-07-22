import { Module } from '@nestjs/common';
import { EmbeddingService } from './embedding.service';
import { EmbeddingResolver } from './embedding.resolver';

@Module({
  providers: [EmbeddingResolver, EmbeddingService],
  exports: [EmbeddingService],
})
export class EmbeddingModule {}
