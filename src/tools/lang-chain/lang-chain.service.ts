import { Injectable } from '@nestjs/common';
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LangChainService {
  private embeddings: OpenAIEmbeddings;
  private model = new ChatOpenAI();

  constructor(private readonly prisma: PrismaService) {
    const apiKey = process.env.OPENAI_API_KEY; // Ensure this is set in your .env file
    this.embeddings = new OpenAIEmbeddings({
      openAIApiKey: apiKey,
      dimensions: 1536,
      modelName: 'text-embedding-3-small',
    });
    this.model = new ChatOpenAI({
      openAIApiKey: apiKey,
      modelName: 'gpt-3.5-turbo',
      temperature: 0.7,
      maxTokens: 1000,
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

  async chatWithModel() {
    const response = await this.model.invoke("What is the capital of France?");
    console.log('Model Response:', response);

    return response.text;
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
