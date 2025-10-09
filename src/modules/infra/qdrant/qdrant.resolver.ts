import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { QdrantService } from './qdrant.service';
import { VectorSearchService } from './vector-search.service';
import { DocumentEmbeddingService } from './document-embedding.service';
import {
  QdrantCollectionType,
  QdrantPointType,
  QdrantCollectionInfoType,
  QdrantSearchResultType,
  QdrantCountResultType,
  QdrantScrollResultType,
  CreateCollectionInput,
  UpsertPointsInput,
  SearchPointsInput,
  CreateIndexInput,
  ScrollPointsInput,
  SemanticSearchInput,
  ProcessDocumentsInput,
} from './dto/qdrant.types';
import { Public } from '@/shared/common/decorator/public.decorator';


@Resolver()
export class QdrantResolver {
  constructor(
    private readonly qdrantService: QdrantService,
    private readonly vectorSearchService: VectorSearchService,
    private readonly documentEmbeddingService: DocumentEmbeddingService,
  ) {}

  @Query(() => [QdrantCollectionType], { name: 'qdrantCollections' })
  async getCollections() {
    const result = await this.qdrantService.getCollections();
    return result.collections;
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
}
