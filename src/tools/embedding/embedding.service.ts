import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { Embedding } from './entities/embedding.entity';


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


@Injectable()
export class EmbeddingService {
  
async createEmbedding(text: string): Promise<Embedding> {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: text,
    });
    const embedding = response.data[0].embedding;

    // Optionally, save to your vector DB here

    // Return as an Embedding entity (adjust fields as needed)
    return {
      id: '', // generate or assign as needed
      text,
      vector: embedding,
      createdAt: new Date(),
    };
  }

}
