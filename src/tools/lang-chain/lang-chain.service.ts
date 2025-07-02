import { Injectable } from '@nestjs/common';
import { OpenAIEmbeddings } from '@langchain/openai';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LangChainService {
  private embeddings: OpenAIEmbeddings;

  constructor(private readonly prisma: PrismaService) {
    const apiKey = process.env.OPENAI_API_KEY; // Ensure this is set in your .env file
    this.embeddings = new OpenAIEmbeddings({
      openAIApiKey: apiKey,
      dimensions: 1536,
      modelName: 'text-embedding-3-small',
    });
  }

  async embedText(content: any) {
    const embedding = await this.embeddings.embedQuery(content);
    console.log('Embedding:', embedding);
    await this.prisma.$executeRaw`
      INSERT INTO documents_demo (content, embedding)
      VALUES (${content}, ${embedding}::float[]);
    `;
    return embedding;
  }

  //async embedDocuments(
  //   contents: string[],
  // ): Promise<{ content: string; embedding: number[] }[]> {
  //   const embeddings = await this.embeddings.embedDocuments(contents);
  //   return contents.map((content, index) => ({
  //     content,
  //     embedding: embeddings[index],
  //   }));
  // }
}
