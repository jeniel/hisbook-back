import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DocumentEmbeddingService } from './document-embedding.service';
import {
  BatchSearchInput,
  CreateCollectionInput,
  CreateIndexInput,
  ProcessDocumentsInput,
  QdrantBatchSearchResultType,
  QdrantCollectionInfoType,
  QdrantCollectionType,
  QdrantCountResultType,
  QdrantHealthStatusType,
  QdrantPointType,
  QdrantScrollResultType,
  QdrantSearchResultType,
  ScrollPointsInput,
  SearchPointsInput,
  SemanticSearchInput,
  UpsertPointsInput,
} from './dto/qdrant.types';
import { EmbeddingService } from './embedding.service';
import { QdrantService } from './qdrant.service';
import { VectorSearchService } from './vector-search.service';


@Resolver()
export class QdrantResolver {
  constructor(
    private readonly qdrantService: QdrantService,
    private readonly vectorSearchService: VectorSearchService,
    private readonly documentEmbeddingService: DocumentEmbeddingService,
    private readonly embeddingService: EmbeddingService,
  ) { }

  @Query(() => [QdrantCollectionType], { name: 'qdrantCollections' })
  async getCollections() {
    const result = await this.qdrantService.getCollections();
    return result.collections;
  }

  @Query(() => QdrantHealthStatusType, { name: 'qdrantHealth' })
  async getQdrantHealth() {
    const health = await this.qdrantService.healthCheck();
    return {
      status: health.status,
      message: health.message,
      isAvailable: this.qdrantService.isAvailable(),
    };
  }

  @Query(() => QdrantCollectionInfoType, { name: 'qdrantCollection' })
  async getCollectionInfo(@Args('name') name: string) {
    return await this.qdrantService.getCollectionInfo(name);
  }

  @Query(() => Boolean, { name: 'qdrantCollectionExists' })
  async collectionExists(@Args('name') name: string) {
    return await this.qdrantService.collectionExists(name);
  }

  @Query(() => [QdrantPointType], { name: 'qdrantPoints' })
  async getPoints(
    @Args('collectionName') collectionName: string,
    @Args('ids', { type: () => [ID] }) ids: (string | number)[],
  ) {
    return await this.qdrantService.retrievePoints(collectionName, ids);
  }

  @Query(() => QdrantPointType, { name: 'qdrantPoint', nullable: true })
  async getPoint(
    @Args('collectionName') collectionName: string,
    @Args('id', { type: () => ID }) id: string | number,
  ) {
    const points = await this.qdrantService.retrievePoints(collectionName, [
      id,
    ]);
    return points.length > 0 ? points[0] : null;
  }

  @Query(() => QdrantCountResultType, { name: 'qdrantPointsCount' })
  async countPoints(
    @Args('collectionName') collectionName: string,
    @Args('filter', { type: () => GraphQLJSON, nullable: true }) filter?: any,
  ) {
    return await this.qdrantService.countPoints(collectionName, filter);
  }

  @Query(() => QdrantScrollResultType, { name: 'qdrantScrollPoints' })
  async scrollPoints(@Args('input') input: ScrollPointsInput) {
    return await this.qdrantService.scrollPoints(
      input.collectionName,
      input.filter,
      input.limit || 100,
      input.offset,
    );
  }

  @Query(() => [QdrantSearchResultType], { name: 'qdrantSearchPoints' })
  async searchPoints(@Args('input') input: SearchPointsInput) {
    return await this.qdrantService.search(input.collectionName, {
      vector: input.vector,
      limit: input.limit,
      filter: input.filter,
      with_payload: input.withPayload,
      with_vector: input.withVector,
    });
  }

  @Query(() => [QdrantSearchResultType], { name: 'qdrantQueryPoints' })
  async queryPoints(@Args('input') input: SearchPointsInput) {
    return await this.qdrantService.query(input.collectionName, {
      vector: input.vector,
      limit: input.limit,
      filter: input.filter,
      with_payload: input.withPayload,
      with_vector: input.withVector,
    });
  }

  @Query(() => QdrantBatchSearchResultType, { name: 'qdrantBatchSearch' })
  async batchSearch(@Args('input') input: BatchSearchInput) {
    const searchParams = input.searches.map(search => ({
      vector: search.vector,
      limit: search.limit,
      filter: search.filter,
      with_payload: search.withPayload,
      with_vector: search.withVector,
    }));

    const results = await this.qdrantService.searchBatch(input.collectionName, searchParams);
    return { results };
  }

  @Query(() => [QdrantSearchResultType], { name: 'semanticSearch' })
  async semanticSearch(@Args('input') input: SemanticSearchInput) {
    return await this.documentEmbeddingService.semanticSearch(
      input.query,
      input.tenantId,
      {
        collectionName: input.collectionName,
        limit: input.limit,
        threshold: input.threshold,
        documentType: input.documentType,
      },
    );
  }

  @Query(() => [QdrantSearchResultType], { name: 'hybridSearch' })
  async hybridSearch(
    @Args('query') query: string,
    @Args('keywords', { type: () => [String] }) keywords: string[],
    @Args('tenantId') tenantId: string,
    @Args('collectionName', { defaultValue: 'documents' })
    collectionName: string,
    @Args('limit', { defaultValue: 10 }) limit: number,
  ) {
    return await this.documentEmbeddingService.hybridSearch(
      query,
      keywords,
      tenantId,
      { collectionName, limit },
    );
  }

  @Query(() => [QdrantSearchResultType], { name: 'findSimilarDocuments' })
  async findSimilarDocuments(
    @Args('documentId') documentId: string,
    @Args('tenantId') tenantId: string,
    @Args('collectionName', { defaultValue: 'documents' })
    collectionName: string,
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('threshold', { defaultValue: 0.8 }) threshold: number,
  ) {
    return await this.documentEmbeddingService.findSimilarDocuments(
      documentId,
      tenantId,
      { collectionName, limit, threshold },
    );
  }

  @Mutation(() => Boolean, { name: 'createQdrantCollection' })
  async createCollection(@Args('input') input: CreateCollectionInput) {
    await this.qdrantService.createCollection(input.name, {
      size: input.size,
      distance: input.distance,
    });
    return true;
  }

  @Mutation(() => Boolean, { name: 'deleteQdrantCollection' })
  async deleteCollection(@Args('name') name: string) {
    await this.qdrantService.deleteCollection(name);
    return true;
  }

  @Mutation(() => Boolean, { name: 'upsertQdrantPoints' })
  async upsertPoints(@Args('input') input: UpsertPointsInput) {
    await this.qdrantService.upsertPoints(input.collectionName, input.points);
    return true;
  }

  @Mutation(() => Boolean, { name: 'deleteQdrantPoints' })
  async deletePoints(
    @Args('collectionName') collectionName: string,
    @Args('ids', { type: () => [ID] }) ids: (string | number)[],
  ) {
    await this.qdrantService.deletePoints(collectionName, ids);
    return true;
  }

  @Mutation(() => Boolean, { name: 'createQdrantIndex' })
  async createPayloadIndex(@Args('input') input: CreateIndexInput) {
    await this.qdrantService.createPayloadIndex(
      input.collectionName,
      input.fieldName,
      input.fieldSchema,
    );
    return true;
  }

  @Mutation(() => Boolean, { name: 'processAndStoreDocuments' })
  async processAndStoreDocuments(@Args('input') input: ProcessDocumentsInput) {
    await this.documentEmbeddingService.processAndStoreDocuments(
      input.documents,
      input.collectionName,
    );
    return true;
  }

  @Mutation(() => Boolean, { name: 'initializeDocumentCollection' })
  async initializeDocumentCollection(
    @Args('collectionName') collectionName: string,
    @Args('vectorSize', { defaultValue: 1536 }) vectorSize: number,
  ) {
    await this.vectorSearchService.initializeDocumentCollection(
      collectionName,
      vectorSize,
    );
    return true;
  }

  @Mutation(() => String, { name: 'deleteTenantDocuments' })
  async deleteTenantDocuments(
    @Args('tenantId') tenantId: string,
    @Args('collectionName', { defaultValue: 'documents' })
    collectionName: string,
  ) {
    const result = await this.documentEmbeddingService.deleteTenantDocuments(
      tenantId,
      collectionName,
    );
    return `Deleted ${result.deleted} documents`;
  }

  @Query(() => String, { name: 'qdrantCollectionAnalytics' })
  async getCollectionAnalytics(
    @Args('collectionName', { defaultValue: 'documents' })
    collectionName: string,
  ) {
    const stats =
      await this.documentEmbeddingService.getCollectionAnalytics(
        collectionName,
      );
    return JSON.stringify(stats, null, 2);
  }

  @Query(() => Boolean, { name: 'isEmbeddingServiceAvailable' })
  async isEmbeddingServiceAvailable() {
    try {
      // Test if the embedding service can generate a simple embedding
      await this.embeddingService.generateEmbedding('test');
      return true;
    } catch (error) {
      return false;
    }
  }

  @Query(() => String, { name: 'qdrantServiceStatus' })
  async getQdrantServiceStatus() {
    const health = await this.qdrantService.healthCheck();
    const isEmbeddingAvailable = await this.isEmbeddingServiceAvailable();

    return JSON.stringify({
      qdrant: {
        status: health.status,
        message: health.message,
        isAvailable: this.qdrantService.isAvailable(),
      },
      embedding: {
        isAvailable: isEmbeddingAvailable,
        status: isEmbeddingAvailable ? 'healthy' : 'unhealthy',
      },
    }, null, 2);
  }

  @Query(() => String, { name: 'qdrantConnectivityTest' })
  async testQdrantConnectivity() {
    try {
      // Test both clients if available
      const results = {
        timestamp: new Date().toISOString(),
        qdrantClient: { available: false, error: null, collections: null },
        httpClient: { available: false, error: null, collections: null },
        summary: { overallStatus: 'unhealthy', workingClients: [] }
      };

      // Test QdrantClient
      if (this.qdrantService.getClient()) {
        try {
          const collections = await this.qdrantService.getClient().getCollections();
          results.qdrantClient = {
            available: true,
            error: null,
            collections: collections.collections?.length || 0
          };
          results.summary.workingClients.push('QdrantClient');
        } catch (error) {
          results.qdrantClient = {
            available: false,
            error: error.message,
            collections: null
          };
        }
      }

      // Test HTTP Client by trying to get collections through our service
      // (which will use HTTP client as fallback)
      try {
        const collections = await this.qdrantService.getCollections();
        if (collections && collections.collections) {
          results.httpClient = {
            available: true,
            error: null,
            collections: collections.collections.length
          };
          if (!results.summary.workingClients.includes('QdrantClient')) {
            results.summary.workingClients.push('HTTPClient');
          }
        }
      } catch (error) {
        if (!results.qdrantClient.available) {
          results.httpClient = {
            available: false,
            error: error.message,
            collections: null
          };
        }
      }

      // Determine overall status
      results.summary.overallStatus = results.summary.workingClients.length > 0 ? 'healthy' : 'unhealthy';

      return JSON.stringify(results, null, 2);
    } catch (error) {
      return JSON.stringify({
        error: `Connectivity test failed: ${error.message}`,
        timestamp: new Date().toISOString()
      }, null, 2);
    }
  }
}
