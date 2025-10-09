import { Injectable, Logger } from '@nestjs/common';
import { QdrantService } from '../qdrant/qdrant.service';

export interface DocumentEmbedding {
  id: string;
  content: string;
  metadata?: Record<string, any>;
  embedding: number[];
}

@Injectable()
export class VectorSearchService {
  private readonly logger = new Logger(VectorSearchService.name);

  constructor(private readonly qdrantService: QdrantService) { }

  /**
   * Initialize a collection for document embeddings
   */
  async initializeDocumentCollection(
    collectionName: string,
    vectorSize: number = 1536,
  ) {
    try {
      this.logger.log(`Initializing document collection: ${collectionName} with vector size: ${vectorSize}`);

      // Use the safer createCollectionIfNotExists method
      await this.qdrantService.createCollectionIfNotExists(collectionName, {
        size: vectorSize,
        distance: 'Cosine',
      });

      // Create payload indexes for better filtering performance
      // These will fail gracefully if they already exist
      try {
        await this.qdrantService.createPayloadIndex(collectionName, 'tenant_id', 'keyword');
        await this.qdrantService.createPayloadIndex(collectionName, 'document_type', 'keyword');
        await this.qdrantService.createPayloadIndex(collectionName, 'created_at', 'integer');
      } catch (indexError) {
        // Indexes might already exist, that's okay
        this.logger.debug(`Some indexes might already exist for ${collectionName}: ${indexError.message}`);
      }

      this.logger.log(`Successfully initialized document collection: ${collectionName}`);
      return true;
    } catch (error) {
      this.logger.error(`Failed to initialize collection: ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Store document embeddings in Qdrant
   */
  async storeDocumentEmbeddings(
    collectionName: string,
    documents: DocumentEmbedding[],
  ) {
    try {
      const points = documents.map(doc => ({
        id: doc.id,
        vector: doc.embedding,
        payload: {
          content: doc.content,
          ...doc.metadata,
          stored_at: Date.now(),
        },
      }));

      const result = await this.qdrantService.upsertPoints(collectionName, points);
      this.logger.log(`Stored ${documents.length} document embeddings in ${collectionName}`);
      return result;
    } catch (error) {
      this.logger.error(`Failed to store embeddings in ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Search for similar documents using vector similarity
   */
  async searchSimilarDocuments(
    collectionName: string,
    queryEmbedding: number[],
    limit: number = 10,
    filter?: any,
    threshold: number = 0.7,
  ) {
    try {
      const results = await this.qdrantService.search(collectionName, {
        vector: queryEmbedding,
        limit,
        filter,
        with_payload: true,
        with_vector: false,
      });

      // Filter by similarity threshold
      const filteredResults = results.filter(result => result.score >= threshold);

      this.logger.log(`Found ${filteredResults.length} similar documents in ${collectionName}`);
      return filteredResults.map(result => ({
        id: result.id,
        score: result.score,
        content: result.payload?.content,
        metadata: {
          ...result.payload,
          content: undefined, // Remove content from metadata to avoid duplication
        },
      }));
    } catch (error) {
      this.logger.error(`Failed to search similar documents in ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Search with tenant isolation
   */
  async searchByTenant(
    collectionName: string,
    tenantId: string,
    queryEmbedding: number[],
    limit: number = 10,
    threshold: number = 0.7,
  ) {
    const filter = {
      must: [
        {
          key: 'tenant_id',
          match: { value: tenantId },
        },
      ],
    };

    return this.searchSimilarDocuments(
      collectionName,
      queryEmbedding,
      limit,
      filter,
      threshold,
    );
  }

  /**
   * Search by document type with tenant isolation
   */
  async searchByDocumentType(
    collectionName: string,
    tenantId: string,
    documentType: string,
    queryEmbedding: number[],
    limit: number = 10,
    threshold: number = 0.7,
  ) {
    const filter = {
      must: [
        {
          key: 'tenant_id',
          match: { value: tenantId },
        },
        {
          key: 'document_type',
          match: { value: documentType },
        },
      ],
    };

    return this.searchSimilarDocuments(
      collectionName,
      queryEmbedding,
      limit,
      filter,
      threshold,
    );
  }

  /**
   * Delete documents by tenant
   */
  async deleteDocumentsByTenant(collectionName: string, tenantId: string) {
    try {
      // First, find all points for this tenant
      const scrollResult = await this.qdrantService.scrollPoints(
        collectionName,
        {
          must: [
            {
              key: 'tenant_id',
              match: { value: tenantId },
            },
          ],
        },
        1000, // Large batch size
      );

      if (scrollResult.points.length > 0) {
        const pointIds = scrollResult.points.map(point => point.id);
        await this.qdrantService.deletePoints(collectionName, pointIds);
        this.logger.log(`Deleted ${pointIds.length} documents for tenant ${tenantId}`);
      }

      return { deleted: scrollResult.points.length };
    } catch (error) {
      this.logger.error(`Failed to delete documents for tenant ${tenantId}`, error);
      throw error;
    }
  }

  /**
   * Get collection statistics
   */
  async getCollectionStats(collectionName: string) {
    try {
      const info = await this.qdrantService.getCollectionInfo(collectionName);
      const count = await this.qdrantService.countPoints(collectionName);

      return {
        name: collectionName,
        points_count: info.points_count,
        vectors_count: info.vectors_count,
        indexed_vectors_count: info.indexed_vectors_count,
        payload_schema: info.payload_schema,
        total_count: count.count,
      };
    } catch (error) {
      this.logger.error(`Failed to get stats for ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Hybrid search combining vector similarity and keyword matching
   */
  async hybridSearch(
    collectionName: string,
    queryEmbedding: number[],
    keywords: string[],
    tenantId?: string,
    limit: number = 10,
  ) {
    try {
      const filter: any = {
        should: [
          // Vector similarity will be handled by the search itself
          // Keywords matching in content
          ...keywords.map(keyword => ({
            key: 'content',
            match: { text: keyword },
          })),
        ],
      };

      // Add tenant filter if provided
      if (tenantId) {
        filter.must = [
          {
            key: 'tenant_id',
            match: { value: tenantId },
          },
        ];
      }

      const results = await this.qdrantService.search(collectionName, {
        vector: queryEmbedding,
        limit,
        filter,
        with_payload: true,
        with_vector: false,
      });

      return results.map(result => ({
        id: result.id,
        score: result.score,
        content: result.payload?.content,
        metadata: result.payload,
      }));
    } catch (error) {
      this.logger.error(`Failed to perform hybrid search in ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Get the underlying QdrantService for advanced operations
   */
  getQdrantService(): QdrantService {
    return this.qdrantService;
  }
}
