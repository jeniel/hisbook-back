import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ScraperService } from '@/modules/tools/scraper/scraper.service';
import { Public } from '@/shared/common/decorator/public.decorator';




@Controller('scraper')
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) {}


  @Public()
  @Post()
  async scrape(@Body('url') url: string) {
    if (!url || !url.startsWith('http')) {
      throw new BadRequestException('Invalid or missing URL');
    }

    const result = await this.scraperService.scrapeAndChunk(url);
    return result;
  }
}
