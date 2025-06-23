import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { Embedding } from './entities/embedding.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmbeddingService {
  private openai: OpenAI;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {
    const apiKey = this.configService.get<string>('OPENAI_API_KEY');
    this.openai = new OpenAI({ apiKey });
  }

  // async createEmbedding(content: any): Promise<Embedding> {
  //   const response = await openai.embeddings.create({
  //     model: 'text-embedding-3-small',
  //     input: content,
  //   });
  //   const embedding = response.data[0].embedding;

  //   const data = {
  //     content: content,
  //     embedding: embedding,
  //     metadata: {
  //       clientId: '1234',
  //       source: 'NESTJS',
  //       length: content.length,
  //     },
  //   };

  //   await this.insertDocumentRawSQL(
  //     data.content,
  //     data.embedding,
  //     data.metadata,
  //   );

  //   return data;
  // }

  async embedJsonObject(
    content: any,
  ): Promise<{ embedding: number[]; json: string }> {
    // Convert JSON object to string
    const jsonString = JSON.stringify(content);

    // Generate embedding
    const response = await this.openai.embeddings.create({
      model: 'text-embedding-3-small', // Use the appropriate model
      input: jsonString,
      encoding_format: 'float',
      dimensions: 1536, // Specify the dimensions if needed
    });

    const embedding = response.data[0].embedding;

    const data = {
      content: content,
      embedding: embedding,
      metadata: {
        clientId: '1234',
        source: 'NESTJS',
        length: content.length,
      },
    };

    await this.insertDocumentRawSQL(
      data.content,
      data.embedding,
      data.metadata,
    );

    return { embedding, json: jsonString };
  }

  async insertDocumentRawSQL(
    content: string,
    embedding: number[],
    metadata: any,
  ): Promise<void> {
    const embeddingString = `{${embedding.join(',')}}`; // Convert embedding array to PostgreSQL array format
    const metadataString = JSON.stringify(metadata); // Ensure metadata is valid JSON

    await this.prisma.$executeRaw`
      INSERT INTO documents (content, embedding, metadata)
      VALUES (${content}, ${embeddingString}::float[], ${metadataString}::jsonb);
    `;
  }

  //end
}
