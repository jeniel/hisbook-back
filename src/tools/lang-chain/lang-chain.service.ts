import { Injectable } from '@nestjs/common';
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LangChainService {
  private embeddings: OpenAIEmbeddings;
  private model = new ChatOpenAI();

  constructor(private readonly prisma: PrismaService) {
    const apiKey = process.env.OPENAI_API_KEY; // Ensure this is set in your .env file
    this.embeddings = new OpenAIEmbeddings({
      openAIApiKey: apiKey,
      // dimensions: 1536,
      modelName: 'text-embedding-ada-002',
    });
    this.model = new ChatOpenAI({
      openAIApiKey: apiKey,
      modelName: 'gpt-4o-mini',
      temperature: 0.3,
      maxTokens: 1000,
    });
  }

  async createEmbbedings(content: any, tenantId: string) {
    const tenant = await this.prisma.tenant.findUnique({
      where: {
        id: tenantId,
      },
    });

    if (!tenant) {
      throw new Error(`Tenant with ID ${tenantId} not found`);
    }

    const embedding = await this.embeddings.embedQuery(content);
    const tableName = Prisma.raw(tenant.documentTableName);

    await this.prisma.$executeRaw`
    INSERT INTO ${tableName} (content, embedding )
    VALUES (${content}, ${embedding}::vector );
  `;

    return {
      message: 'Embedding created successfully',
    };
  }

  //update embedding function to use OpenAIEmbeddings

  async updateEmbbedings(content: any, id: number) {
    const embedding = await this.embeddings.embedQuery(content);

    const slug = 'becker';
    const tableName = Prisma.raw(`documents_${slug}`);

    await this.prisma.$executeRaw`
    UPDATE ${tableName}
    SET content = ${content}, embedding = ${embedding}::vector
    WHERE id = ${id}
  `;

    return {
      message: 'Embedding updated successfully',
    };
  }

  async findContent(tenantId: string) {
    const tenant = await this.prisma.tenant.findUnique({
      where: {
        id: tenantId,
      },
    });

    if (!tenant) {
      throw new Error(`Tenant with ID ${tenantId} not found`);
    }

    const tableName = Prisma.raw(tenant.documentTableName);

    const contents = await this.prisma.$queryRaw`
      SELECT id,content FROM ${tableName}
    `;

    console.log(contents);

    return {
      message: 'Contents retrieved successfully',
    };
  }

  async chatWithModel() {
    const response = await this.model.invoke('What is the capital of France?');
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
