import { Module } from '@nestjs/common';
import { EmbeddingModule } from '@/modules/tools/embedding/embedding.module';
import { ScraperModule } from '@/modules/tools/scraper/scraper.module';
import { LangChainModule } from '@/modules/tools/lang-chain/lang-chain.module';
import { MailModule } from '@/modules/tools/mail/mail.module';

@Module({
  imports: [ScraperModule, EmbeddingModule, LangChainModule, MailModule],
  exports: [ScraperModule, EmbeddingModule, LangChainModule, MailModule],
})
export class ToolsModule {}
