import { Module } from '@nestjs/common';
import { EmbeddingService } from './embedding.service';
import { EmbeddingResolver } from './embedding.resolver';

@Module({
  providers: [EmbeddingResolver, EmbeddingService],
})
export class EmbeddingModule {}
