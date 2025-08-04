import { PartialType } from '@nestjs/mapped-types';
import { CreateScraperDto } from '@/modules/tools/scraper/dto/create-scraper.dto';

export class UpdateScraperDto extends PartialType(CreateScraperDto) {}
