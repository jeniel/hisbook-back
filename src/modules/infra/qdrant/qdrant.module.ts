import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DocumentEmbeddingService } from './document-embedding.service';
import { EmbeddingService } from './embedding.service';
import { QdrantController } from './qdrant.controller';
import { QdrantResolver } from './qdrant.resolver';
import { QdrantService } from './qdrant.service';
import { VectorSearchService } from './vector-search.service';

@Module({
  imports: [ConfigModule],
  controllers: [QdrantController],
  providers: [
    QdrantService,
    VectorSearchService,
    DocumentEmbeddingService,
    EmbeddingService,
    QdrantResolver,
  ],
  exports: [
    QdrantService,
    VectorSearchService,
    DocumentEmbeddingService,
    EmbeddingService,
  ],
})
export class QdrantModule {}
