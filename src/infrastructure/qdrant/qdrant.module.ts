import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { QdrantService } from './qdrant.service';
import { QdrantController } from './qdrant.controller';
import { QdrantResolver } from './qdrant.resolver';
import { VectorSearchService } from './vector-search.service';
import { DocumentEmbeddingService } from './document-embedding.service';
import { EmbeddingModule } from '../../modules/tools/embedding/embedding.module';

@Module({
  imports: [ConfigModule, EmbeddingModule],
  controllers: [QdrantController],
  providers: [QdrantService, VectorSearchService, DocumentEmbeddingService, QdrantResolver],
  exports: [QdrantService, VectorSearchService, DocumentEmbeddingService],
})
export class QdrantModule {}
