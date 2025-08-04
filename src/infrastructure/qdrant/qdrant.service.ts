import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { QdrantClient } from '@qdrant/js-client-rest';

export interface QdrantPoint {
  id: string | number;
  vector: number[];
  payload?: Record<string, any>;
}

export interface SearchParams {
  vector: number[];
  limit?: number;
  filter?: any;
  with_payload?: boolean;
  with_vector?: boolean;
}

export interface CreateCollectionParams {
  size: number;
  distance?: 'Cosine' | 'Euclid' | 'Dot';
}

@Injectable()
export class QdrantService implements OnModuleInit {
  private readonly logger = new Logger(QdrantService.name);
  private client: QdrantClient;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    const url = this.configService.get<string>('QDRANT_URL', 'http://localhost:6333');
    const apiKey = this.configService.get<string>('QDRANT_API_KEY');

    if (!url) {
      this.logger.warn('QDRANT_URL not configured, skipping Qdrant initialization');
      return;
    }

    this.client = new QdrantClient({
      url,
      ...(apiKey && { apiKey }),
    });

    try {
      // Test connection
      const collections = await this.client.getCollections();
      this.logger.log(`Connected to Qdrant at ${url}`);
      this.logger.log(`Found ${collections.collections.length} collections`);
    } catch (error) {
      this.logger.error(`Failed to connect to Qdrant at ${url}`, error.message);
      // Log more details for debugging
      if (error.cause) {
        this.logger.error('Error cause:', error.cause);
      }
    }
  }

  /**
   * Check if Qdrant client is initialized
   */
  private ensureClientInitialized() {
    if (!this.client) {
      throw new Error('Qdrant client is not initialized. Check your QDRANT_URL configuration.');
    }
  }

  /**
   * Get all collections
   */
  async getCollections() {
    try {
      this.ensureClientInitialized();
      return await this.client.getCollections();
    } catch (error) {
      this.logger.error('Failed to get collections', error);
      throw error;
    }
  }

  /**
   * Create a new collection
   */
  async createCollection(
    collectionName: string,
    params: CreateCollectionParams,
  ) {
    try {
      const result = await this.client.createCollection(collectionName, {
        vectors: {
          size: params.size,
          distance: params.distance || 'Cosine',
        },
      });
      this.logger.log(`Created collection: ${collectionName}`);
      return result;
    } catch (error) {
      this.logger.error(`Failed to create collection: ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Delete a collection
   */
  async deleteCollection(collectionName: string) {
    try {
      const result = await this.client.deleteCollection(collectionName);
      this.logger.log(`Deleted collection: ${collectionName}`);
      return result;
    } catch (error) {
      this.logger.error(`Failed to delete collection: ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Check if collection exists
   */
  async collectionExists(collectionName: string): Promise<boolean> {
    try {
      const collections = await this.client.getCollections();
      return collections.collections.some(col => col.name === collectionName);
    } catch (error) {
      this.logger.error(`Failed to check collection existence: ${collectionName}`, error);
      return false;
    }
  }

  /**
   * Get collection info
   */
  async getCollectionInfo(collectionName: string) {
    try {
      return await this.client.getCollection(collectionName);
    } catch (error) {
      this.logger.error(`Failed to get collection info: ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Upsert points into a collection
   */
  async upsertPoints(collectionName: string, points: QdrantPoint[]) {
    try {
      const result = await this.client.upsert(collectionName, {
        wait: true,
        points,
      });
      this.logger.log(`Upserted ${points.length} points to ${collectionName}`);
      return result;
    } catch (error) {
      this.logger.error(`Failed to upsert points to ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Search for similar vectors
   */
  async search(collectionName: string, params: SearchParams) {
    try {
      const result = await this.client.search(collectionName, {
        vector: params.vector,
        limit: params.limit || 10,
        filter: params.filter,
        with_payload: params.with_payload !== false,
        with_vector: params.with_vector || false,
      });
      return result;
    } catch (error) {
      this.logger.error(`Failed to search in ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Search using query API (newer unified API)
   */
  async query(collectionName: string, params: SearchParams) {
    try {
      const result = await this.client.query(collectionName, {
        query: {
          nearest: params.vector,
        },
        limit: params.limit || 10,
        filter: params.filter,
        with_payload: params.with_payload !== false,
        with_vector: params.with_vector || false,
      });
      return result;
    } catch (error) {
      this.logger.error(`Failed to query in ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Retrieve specific points by IDs
   */
  async retrievePoints(collectionName: string, ids: (string | number)[]) {
    try {
      return await this.client.retrieve(collectionName, {
        ids,
        with_payload: true,
        with_vector: true,
      });
    } catch (error) {
      this.logger.error(`Failed to retrieve points from ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Delete points from collection
   */
  async deletePoints(collectionName: string, ids: (string | number)[]) {
    try {
      const result = await this.client.delete(collectionName, {
        wait: true,
        points: ids,
      });
      this.logger.log(`Deleted ${ids.length} points from ${collectionName}`);
      return result;
    } catch (error) {
      this.logger.error(`Failed to delete points from ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Create payload index for faster filtering
   */
  async createPayloadIndex(
    collectionName: string,
    fieldName: string,
    fieldSchema: 'keyword' | 'integer' | 'float' | 'geo' | 'text' | 'bool' = 'keyword',
  ) {
    try {
      const result = await this.client.createPayloadIndex(collectionName, {
        field_name: fieldName,
        field_schema: fieldSchema,
        wait: true,
      });
      this.logger.log(`Created payload index for ${fieldName} in ${collectionName}`);
      return result;
    } catch (error) {
      this.logger.error(`Failed to create payload index for ${fieldName} in ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Batch search multiple vectors
   */
  async searchBatch(collectionName: string, searches: SearchParams[]) {
    try {
      const searchRequests = searches.map(params => ({
        vector: params.vector,
        limit: params.limit || 10,
        filter: params.filter,
        with_payload: params.with_payload !== false,
        with_vector: params.with_vector || false,
      }));

      return await this.client.searchBatch(collectionName, {
        searches: searchRequests,
      });
    } catch (error) {
      this.logger.error(`Failed to batch search in ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Scroll through all points in a collection
   */
  async scrollPoints(
    collectionName: string,
    filter?: any,
    limit: number = 100,
    offset?: string | number,
  ) {
    try {
      return await this.client.scroll(collectionName, {
        filter,
        limit,
        offset,
        with_payload: true,
        with_vector: false,
      });
    } catch (error) {
      this.logger.error(`Failed to scroll points in ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Count points in collection with optional filter
   */
  async countPoints(collectionName: string, filter?: any) {
    try {
      return await this.client.count(collectionName, {
        filter,
      });
    } catch (error) {
      this.logger.error(`Failed to count points in ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Get the raw Qdrant client for advanced operations
   */
  getClient(): QdrantClient {
    return this.client;
  }
}
