import { Module } from '@nestjs/common';
import { VectorSearchService } from '@/infrastructure/qdrant/vector-search.service';
import { LangChainResolver } from '@/modules/tools/lang-chain/lang-chain.resolver';
import { LangChainService } from '@/modules/tools/lang-chain/lang-chain.service';
import { QdrantService } from '@/infrastructure/qdrant/qdrant.service';

@Module({
  providers: [LangChainResolver, LangChainService, VectorSearchService,QdrantService],
})
export class LangChainModule {}
