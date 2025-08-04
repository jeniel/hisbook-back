import { Module } from '@nestjs/common';
import { ScraperService } from '@/modules/tools/scraper/scraper.service';
import { ScraperController } from '@/modules/tools/scraper/scraper.controller';

@Module({
  controllers: [ScraperController],
  providers: [ScraperService],
})
export class ScraperModule {}
