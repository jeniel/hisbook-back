import { Module } from '@nestjs/common';
import { ScraperModule } from './scraper/scraper.module';
import { EmbeddingModule } from './embedding/embedding.module';

@Module({
  imports: [ScraperModule, EmbeddingModule]
})
export class ToolsModule {}
