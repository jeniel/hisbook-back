import { Injectable } from '@nestjs/common';
import { CreateScraperDto } from './dto/create-scraper.dto';
import { UpdateScraperDto } from './dto/update-scraper.dto';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class ScraperService {
   async scrapeAndChunk(url: string, chunkSize = 500): Promise<any[]> {
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const title = $('title').text().trim();
    const text = $('body').text().replace(/\s+/g, ' ').trim();

    const chunks = this.chunkText(text, chunkSize);
    // Clean, RAG-ready output
    return chunks.map((chunk, i) => ({
      id: uuidv4(),
      content: chunk, // Use 'content' for RAG
      metadata: {
        source: url,
        title,
        chunk_index: i,
        length: chunk.length,
        total_chunks: chunks.length,
        scraped_at: new Date().toISOString(),
      },
    }));
  }

  private chunkText(text: string, size: number): string[] {
    const result: string[] = [];
    let current = '';

    for (const sentence of text.split(/(?<=[.?!])\s+/)) {
      if ((current + sentence).length <= size) {
        current += sentence + ' ';
      } else {
        result.push(current.trim());
        current = sentence + ' ';
      }
    }
    if (current.trim()) result.push(current.trim());
    return result;
  }
}
