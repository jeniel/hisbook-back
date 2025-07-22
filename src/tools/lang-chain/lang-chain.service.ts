import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { DocumentToEmbedInput } from 'src/qdrant/dto/qdrant.types';
import { VectorSearchService } from 'src/qdrant/vector-search.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LangChainService {
  private embeddings: OpenAIEmbeddings;
  private model = new ChatOpenAI();

  constructor(
    private readonly prisma: PrismaService,
    private readonly vectorSearchService: VectorSearchService,
  ) {
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

  // Function to create embeddings and store them in the database
  async createEmbeddings(
    documents: DocumentToEmbedInput[],
    collectionName: string = 'documents',
    // tenantId: string,
  ) {
    // const tenant = await this.prisma.tenant.findUnique({
    //   where: {
    //     id: tenantId,
    //   },
    // });

    // if (!tenant) {
    //   throw new Error(`Tenant with ID ${tenantId} not found`);
    // }

    // const embedding = await this.embeddings.embedQuery(payload.documents);
    //   const tableName = Prisma.raw(tenant.documentTableName);

    //   await this.prisma.$executeRaw`
    //   INSERT INTO ${tableName} (content, embedding )
    //   VALUES (${content}, ${embedding}::vector );
    // `;

    // Generate embeddings for all documents
    const documentsWithEmbeddings = await Promise.all(
      documents.map(async (doc) => {
        const embedding = await this.embeddings.embedQuery(doc.content);
        return {
          id: doc.id || uuidv4(), // Generate a new ID if not provided
          content: doc.content,
          embedding,
          metadata: {
            tenant_id: doc.tenantId,
            document_type: doc.documentType,
            created_at: Date.now(),
            ...doc.metadata,
          },
        };
      }),
    );

    // Store in Qdrant
    const result = await this.vectorSearchService.storeDocumentEmbeddings(
      collectionName,
      documentsWithEmbeddings,
    );

    return {
      message: 'Embedding created successfully',
    };
  }

  //update embedding function to use OpenAIEmbeddings
  async updateEmbeddings(content: string, id: number, tenantId: string) {
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
    UPDATE ${tableName}
    SET content = ${content}, embedding = ${embedding}::vector
    WHERE id = ${id}
  `;

    return {
      message: 'Embedding updated successfully',
    };
  }

  //delete embedding function
  async deleteEmbedding(id: number, tenantId: string) {
    const tenant = await this.prisma.tenant.findUnique({
      where: {
        id: tenantId,
      },
    });

    if (!tenant) {
      throw new Error(`Tenant with ID ${tenantId} not found`);
    }

    const tableName = Prisma.raw(tenant.documentTableName);

    await this.prisma.$executeRaw`
    DELETE FROM ${tableName}
    WHERE id = ${id}
  `;

    return {
      message: 'Embedding deleted successfully',
    };
  }

  // Function to find content with pagination
  async findContent(tenantId: string, page: number, limit: number) {
    const tenant = await this.prisma.tenant.findUnique({
      where: {
        id: tenantId,
      },
    });

    if (!tenant) {
      throw new Error(`Tenant with ID ${tenantId} not found`);
    }

    const tableName = Prisma.raw(tenant.documentTableName);
    const offset = (page - 1) * limit;

    // Get total count for pagination metadata
    const totalCountResult = await this.prisma.$queryRaw<[{ count: bigint }]>`
    SELECT COUNT(*) as count FROM ${tableName}
  `;
    const totalCount = Number(totalCountResult[0].count);

    // Get paginated results
    const contents = await this.prisma.$queryRaw<
      { id: bigint; content: string }[]
    >`
    SELECT id, content FROM ${tableName}
    ORDER BY id desc
    LIMIT ${limit} OFFSET ${offset}
  `;

    const formattedContents = contents.map((item) => ({
      ...item,
      id: item.id.toString(),
    }));

    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return {
      content: formattedContents,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        limit,
        hasNextPage,
        hasPrevPage,
      },
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
