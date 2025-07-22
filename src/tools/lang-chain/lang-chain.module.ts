import { Module } from '@nestjs/common';
import { VectorSearchService } from 'src/qdrant/vector-search.service';
import { LangChainResolver } from './lang-chain.resolver';
import { LangChainService } from './lang-chain.service';
import { QdrantService } from 'src/qdrant/qdrant.service';

@Module({
  providers: [LangChainResolver, LangChainService, VectorSearchService,QdrantService],
})
export class LangChainModule {}
