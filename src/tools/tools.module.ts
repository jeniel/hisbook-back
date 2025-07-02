import { Module } from '@nestjs/common';
import { EmbeddingModule } from './embedding/embedding.module';
import { ScraperModule } from './scraper/scraper.module';
import { LangChainModule } from './lang-chain/lang-chain.module';

@Module({
  imports: [ScraperModule, EmbeddingModule, LangChainModule]
})
export class ToolsModule {}
