import { ChatOpenAI } from '@langchain/openai';
import { Injectable, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { VectorSearchService } from '../qdrant/vector-search.service';
import { EmbeddingService } from './embedding.service';

interface DocumentToEmbed {
  id?: string;
  content: string;
  documentType: string;
  metadata?: Record<string, any>;
}

@Injectable()
export class DocumentEmbeddingService {
  private readonly logger = new Logger(DocumentEmbeddingService.name);
  private model = new ChatOpenAI();

  constructor(
    private readonly vectorSearchService: VectorSearchService,
    private readonly embeddingService: EmbeddingService,
  ) {
    const apiKey = process.env.OPENAI_API_KEY; // Ensure this is set in your .env file
    this.model = new ChatOpenAI({
      openAIApiKey: apiKey,
      modelName: 'gpt-4o-mini',
      temperature: 0.3,
      maxTokens: 1000,
    });
  }

  /**
   * Process and store documents with embeddings
   */
  async processAndStoreDocuments(
    documents: DocumentToEmbed[],
    collectionName: string = 'documents',
  ) {
    try {
      this.logger.log(`Processing ${documents.length} documents for collection: ${collectionName}`);

      // Check if vector search service can initialize (Qdrant availability)
      const initialized = await this.vectorSearchService.initializeDocumentCollection(
        collectionName,
      );

      if (!initialized) {
        this.logger.warn('Vector storage not available, documents will not be stored');
        return { stored: 0, message: 'Vector storage unavailable' };
      }

      // Process documents in batches to avoid memory issues with large datasets
      const batchSize = 50; // Process 50 documents at a time
      const results = [];

      for (let i = 0; i < documents.length; i += batchSize) {
        const batch = documents.slice(i, i + batchSize);
        this.logger.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(documents.length / batchSize)} (${batch.length} documents)`);

        // Generate embeddings for batch
        const documentsWithEmbeddings = await Promise.all(
          batch.map(async (doc) => {
            try {
              const embedding = await this.embeddingService.generateEmbedding(doc.content);
              return {
                id: doc.id || uuidv4(),
                content: doc.content,
                embedding,
                metadata: {
                  document_type: doc.documentType,
                  created_at: Date.now(),
                  ...doc.metadata,
                },
              };
            } catch (embeddingError) {
              this.logger.error(`Failed to generate embedding for document ${doc.id || 'unknown'}:`, embeddingError);
              throw embeddingError;
            }
          }),
        );

        // Store batch in Qdrant
        try {
          const result = await this.vectorSearchService.storeDocumentEmbeddings(
            collectionName,
            documentsWithEmbeddings,
          );
          results.push(result);
          this.logger.log(`Successfully stored batch ${Math.floor(i / batchSize) + 1}`);
        } catch (storageError) {
          this.logger.error(`Failed to store batch ${Math.floor(i / batchSize) + 1}:`, storageError);
          throw storageError;
        }
      }

      this.logger.log(`Successfully processed and stored ${documents.length} documents in ${collectionName}`);

      return {
        stored: documents.length,
        batches: results.length,
        message: 'All documents processed successfully'
      };
    } catch (error) {
      this.logger.error('Failed to process and store documents', error);
      throw error;
    }
  }

  /**
   * Semantic search for documents
   */
  async semanticSearch(
    query: string,
    tenantId: string,
    options: {
      collectionName?: string;
      limit?: number;
      threshold?: number;
      documentType?: string;
    } = {},
  ) {
    try {
      const {
        collectionName = 'documents',
        limit = 10,
        threshold = 0.7,
        documentType,
      } = options;

      // Generate embedding for the query
      const queryEmbedding =
        await this.embeddingService.generateEmbedding(query);

      // Search based on whether document type is specified
      const results = documentType
        ? await this.vectorSearchService.searchByDocumentType(
          collectionName,
          tenantId,
          documentType,
          queryEmbedding,
          limit,
          threshold,
        )
        : await this.vectorSearchService.searchByTenant(
          collectionName,
          tenantId,
          queryEmbedding,
          limit,
          threshold,
        );

      this.logger.log(
        `Semantic search returned ${results.length} results for tenant ${tenantId}`,
      );
      return results;
    } catch (error) {
      this.logger.error('Failed to perform semantic search', error);
      throw error;
    }
  }

  /**
   * Hybrid search combining semantic and keyword search
   */
  async hybridSearch(
    query: string,
    keywords: string[],
    tenantId: string,
    options: {
      collectionName?: string;
      limit?: number;
    } = {},
  ) {
    try {
      const { collectionName = 'documents', limit = 10 } = options;

      // Generate embedding for the query
      const queryEmbedding =
        await this.embeddingService.generateEmbedding(query);

      // Perform hybrid search
      const results = await this.vectorSearchService.hybridSearch(
        collectionName,
        queryEmbedding,
        keywords,
        tenantId,
        limit,
      );

      this.logger.log(
        `Hybrid search returned ${results.length} results for tenant ${tenantId}`,
      );
      return results;
    } catch (error) {
      this.logger.error('Failed to perform hybrid search', error);
      throw error;
    }
  }

  /**
   * Find similar documents to a given document
   */
  async findSimilarDocuments(
    documentId: string,
    tenantId: string,
    options: {
      collectionName?: string;
      limit?: number;
      threshold?: number;
    } = {},
  ) {
    try {
      const {
        collectionName = 'documents',
        limit = 5,
        threshold = 0.8,
      } = options;

      // First, retrieve the document to get its embedding
      const documents = await this.vectorSearchService
        .getQdrantService()
        .retrievePoints(collectionName, [documentId]);

      if (documents.length === 0) {
        throw new Error(`Document ${documentId} not found`);
      }

      const document = documents[0];
      if (!document.vector) {
        throw new Error(`Document ${documentId} has no vector`);
      }

      // Search for similar documents, excluding the original
      const results = await this.vectorSearchService.searchByTenant(
        collectionName,
        tenantId,
        document.vector as number[],
        limit + 1, // +1 to account for the original document
        threshold,
      );

      // Filter out the original document
      const similarDocuments = results.filter(
        (result) => result.id !== documentId,
      );

      this.logger.log(
        `Found ${similarDocuments.length} similar documents to ${documentId}`,
      );
      return similarDocuments.slice(0, limit);
    } catch (error) {
      this.logger.error(
        `Failed to find similar documents to ${documentId}`,
        error,
      );
      throw error;
    }
  }

  /**
   * Delete all documents for a tenant
   */
  async deleteTenantDocuments(
    tenantId: string,
    collectionName: string = 'documents',
  ) {
    try {
      const result = await this.vectorSearchService.deleteDocumentsByTenant(
        collectionName,
        tenantId,
      );
      this.logger.log(
        `Deleted ${result.deleted} documents for tenant ${tenantId}`,
      );
      return result;
    } catch (error) {
      this.logger.error(
        `Failed to delete documents for tenant ${tenantId}`,
        error,
      );
      throw error;
    }
  }

  /**
   * Get analytics for a collection
   */
  async getCollectionAnalytics(collectionName: string = 'documents') {
    try {
      const stats =
        await this.vectorSearchService.getCollectionStats(collectionName);
      return stats;
    } catch (error) {
      this.logger.error(`Failed to get analytics for ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Batch update documents (useful for reprocessing with new embeddings)
   */
  async batchUpdateDocuments(
    documentIds: string[],
    collectionName: string = 'documents',
  ) {
    try {
      // Retrieve existing documents
      const existingDocs = await this.vectorSearchService
        .getQdrantService()
        .retrievePoints(collectionName, documentIds);

      if (existingDocs.length === 0) {
        return { updated: 0 };
      }

      // Regenerate embeddings for existing content
      const updatedDocs = await Promise.all(
        existingDocs.map(async (doc) => {
          const content = doc.payload?.content as string;
          if (!content) {
            this.logger.warn(`Document ${doc.id} has no content, skipping`);
            return null;
          }

          const embedding =
            await this.embeddingService.generateEmbedding(content);
          return {
            id: doc.id.toString(), // Convert to string to match DocumentEmbedding interface
            content,
            embedding,
            metadata: {
              ...doc.payload,
              updated_at: Date.now(),
            },
          };
        }),
      );

      // Filter out null values and store updated documents
      const validUpdatedDocs = updatedDocs.filter((doc) => doc !== null);

      if (validUpdatedDocs.length > 0) {
        await this.vectorSearchService.storeDocumentEmbeddings(
          collectionName,
          validUpdatedDocs,
        );
      }

      this.logger.log(
        `Updated ${validUpdatedDocs.length} documents in ${collectionName}`,
      );
      return { updated: validUpdatedDocs.length };
    } catch (error) {
      this.logger.error('Failed to batch update documents', error);
      throw error;
    }
  }
}
