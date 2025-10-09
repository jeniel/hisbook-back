import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { QdrantClient } from '@qdrant/js-client-rest';
import axios, { AxiosInstance } from 'axios';

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
  private httpClient: AxiosInstance | null = null;

  constructor(private configService: ConfigService) { }

  async onModuleInit() {
    const url = this.configService.get<string>('QDRANT_URL', 'http://localhost:6333');
    const apiKey = this.configService.get<string>('QDRANT_API_KEY');
    const timeout = this.configService.get<number>('QDRANT_TIMEOUT', 30000); // 30 seconds default
    const retries = this.configService.get<number>('QDRANT_MAX_RETRIES', 3);

    // Validate configuration
    this.validateConfiguration(url, timeout, retries);

    if (!url) {
      this.logger.warn('QDRANT_URL not configured, skipping Qdrant initialization');
      return;
    }

    this.logger.log(`Initializing Qdrant client with URL: ${url}`);
    this.logger.log(`API Key provided: ${apiKey ? 'Yes' : 'No'}`);
    this.logger.log(`Configuration: timeout=${timeout}ms, retries=${retries}`);

    try {
      // Add additional logging for debugging
      this.logger.debug(`Creating QdrantClient with config: ${JSON.stringify({
        url,
        timeout,
        hasApiKey: !!apiKey
      })}`);

      const clientConfig: any = {
        url,
        timeout,
        // Disable version check to avoid compatibility issues
        checkCompatibility: false,
        // Add custom fetch to override the default behavior
        fetch: async (input: RequestInfo | URL, init?: RequestInit) => {
          // Log the actual URL being called for debugging
          this.logger.log(`Intercepted fetch URL: ${input}`);

          // Ensure we're not adding port 6333 to HTTPS URLs
          let urlToFetch = input.toString();
          if (urlToFetch.includes(':6333')) {
            if (urlToFetch.includes('https://')) {
              // For HTTPS, remove the port entirely and let it default to 443
              urlToFetch = urlToFetch.replace(':6333', '');
              this.logger.log(`Corrected HTTPS URL: ${urlToFetch}`);
            } else if (urlToFetch.includes('http://')) {
              // For HTTP, change port 6333 to 443 for HTTPS
              urlToFetch = urlToFetch.replace('http://', 'https://').replace(':6333', '');
              this.logger.log(`Corrected HTTP to HTTPS URL: ${urlToFetch}`);
            }
          }

          return fetch(urlToFetch, init);
        },
      };

      if (apiKey) {
        clientConfig.apiKey = apiKey;
      }

      this.client = new QdrantClient(clientConfig);

      // Initialize HTTP client as a fallback for direct API calls
      this.initializeHttpClient(url, apiKey, timeout);

      await this.testConnection();
    } catch (error) {
      this.logger.error(`Failed to initialize Qdrant client: ${error.message}`);
      if (error.stack) {
        this.logger.debug(`Error stack: ${error.stack}`);
      }
      // Don't throw error, allow application to start without Qdrant
      this.client = null;
    }
  }

  /**
   * Validate Qdrant configuration
   */
  private validateConfiguration(url: string, timeout: number, retries: number) {
    const issues: string[] = [];

    if (!url) {
      issues.push('QDRANT_URL is not set');
    } else {
      try {
        new URL(url);
      } catch {
        issues.push(`QDRANT_URL is not a valid URL: ${url}`);
      }
    }

    if (timeout <= 0 || timeout > 300000) { // Max 5 minutes
      issues.push(`QDRANT_TIMEOUT should be between 1 and 300000ms, got: ${timeout}`);
    }

    if (retries < 0 || retries > 10) {
      issues.push(`QDRANT_MAX_RETRIES should be between 0 and 10, got: ${retries}`);
    }

    if (issues.length > 0) {
      this.logger.warn('Qdrant configuration issues detected:');
      issues.forEach(issue => this.logger.warn(`  - ${issue}`));
    }
  }

  /**
   * Initialize HTTP client as fallback for direct API calls
   */
  private initializeHttpClient(url: string, apiKey: string, timeout: number) {
    try {
      // Remove port from URL if it includes :6333 or :443
      let cleanUrl = url;
      if (cleanUrl.includes(':6333')) {
        cleanUrl = cleanUrl.replace(':6333', '');
      }
      if (cleanUrl.includes(':443')) {
        cleanUrl = cleanUrl.replace(':443', '');
      }

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (apiKey) {
        headers['Api-Key'] = apiKey;
      }

      this.httpClient = axios.create({
        baseURL: cleanUrl,
        timeout,
        headers,
        // Important: disable SSL verification if needed for development
        // httpsAgent: new https.Agent({ rejectUnauthorized: false })
      });

      this.logger.log(`HTTP client initialized with base URL: ${cleanUrl}`);
    } catch (error) {
      this.logger.error(`Failed to initialize HTTP client: ${error.message}`);
      this.httpClient = null;
    }
  }

  /**
   * Test connection to Qdrant with retry mechanism
   */
  private async testConnection(maxRetries: number = 3) {
    let lastError: any;
    const url = this.configService.get<string>('QDRANT_URL');

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        this.logger.log(`Testing Qdrant connection (attempt ${attempt}/${maxRetries})...`);

        // Use a Promise with timeout to better control the connection test
        const timeoutMs = this.configService.get<number>('QDRANT_TIMEOUT', 30000);

        const connectionTest = new Promise(async (resolve, reject) => {
          try {
            // First try the QdrantClient
            const collections = await this.client.getCollections();
            resolve(collections);
          } catch (clientError) {
            this.logger.warn(`QdrantClient failed: ${clientError.message}`);

            // If QdrantClient fails, try HTTP client as fallback
            if (this.httpClient) {
              try {
                this.logger.log('Trying HTTP client as fallback...');
                const response = await this.httpClient.get('/collections');
                this.logger.log('✓ HTTP client connection successful');
                resolve(response.data);
              } catch (httpError) {
                this.logger.warn(`HTTP client also failed: ${httpError.message}`);
                reject(clientError); // Reject with original error
              }
            } else {
              reject(clientError);
            }
          }
        });

        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error(`Connection timeout after ${timeoutMs}ms`)), timeoutMs);
        });

        const result = await Promise.race([connectionTest, timeoutPromise]) as any;

        this.logger.log(`✓ Connected to Qdrant successfully`);

        // Handle different response formats
        if (result && result.result && result.result.collections) {
          this.logger.log(`Found ${result.result.collections.length} collections`);
        } else if (result && result.collections) {
          this.logger.log(`Found ${result.collections.length} collections`);
        } else {
          this.logger.log(`Connected successfully (collections info not available)`);
        }
        return; // Success, exit function

      } catch (error) {
        lastError = error;
        this.logger.warn(`Connection attempt ${attempt} failed: ${error.message}`);

        if (attempt < maxRetries) {
          const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
          this.logger.log(`Retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }

    // All retries failed
    this.logger.error(`Failed to connect to Qdrant after ${maxRetries} attempts`);
    this.logger.error(`Last error: ${lastError.message}`);

    if (lastError.cause) {
      this.logger.error(`Error cause: ${lastError.cause.message || lastError.cause}`);
    }

    // Log troubleshooting tips
    this.logTroubleshootingTips();

    throw lastError;
  }

  /**
   * Log troubleshooting tips for connection issues
   */
  private logTroubleshootingTips() {
    const url = this.configService.get<string>('QDRANT_URL');
    this.logger.log('=== Qdrant Connection Troubleshooting ===');
    this.logger.log(`1. Verify Qdrant URL is correct: ${url}`);
    this.logger.log('2. Check if Qdrant service is running and accessible');
    this.logger.log('3. Verify network connectivity and firewall rules');
    this.logger.log('4. For HTTPS URLs, ensure SSL/TLS certificates are valid');
    this.logger.log('5. Check if API key is required and properly configured');
    this.logger.log('6. Consider increasing QDRANT_TIMEOUT if network is slow');
    this.logger.log('==========================================');
  }

  /**
   * Check if Qdrant client is initialized
   */
  private ensureClientInitialized() {
    if (!this.client) {
      throw new Error('Qdrant client is not initialized. Check your QDRANT_URL configuration and ensure Qdrant service is accessible.');
    }
  }

  /**
   * Check if Qdrant is available
   */
  public isAvailable(): boolean {
    return this.client !== null || this.httpClient !== null;
  }

  /**
   * Health check for Qdrant connection
   */
  async healthCheck(): Promise<{ status: 'healthy' | 'unhealthy'; message: string }> {
    try {
      if (!this.client && !this.httpClient) {
        return { status: 'unhealthy', message: 'Neither Qdrant client nor HTTP client initialized' };
      }

      // Try QdrantClient first
      if (this.client) {
        try {
          await this.client.getCollections();
          return { status: 'healthy', message: 'Qdrant connection is healthy (via QdrantClient)' };
        } catch (clientError) {
          this.logger.debug(`QdrantClient health check failed: ${clientError.message}`);

          // Try HTTP client as fallback
          if (this.httpClient) {
            try {
              await this.httpClient.get('/collections');
              return { status: 'healthy', message: 'Qdrant connection is healthy (via HTTP client)' };
            } catch (httpError) {
              return {
                status: 'unhealthy',
                message: `Both QdrantClient and HTTP client health checks failed: ${clientError.message}`
              };
            }
          } else {
            return {
              status: 'unhealthy',
              message: `QdrantClient health check failed: ${clientError.message}`
            };
          }
        }
      } else if (this.httpClient) {
        // Only HTTP client available
        try {
          await this.httpClient.get('/collections');
          return { status: 'healthy', message: 'Qdrant connection is healthy (via HTTP client only)' };
        } catch (httpError) {
          return {
            status: 'unhealthy',
            message: `HTTP client health check failed: ${httpError.message}`
          };
        }
      }

      return { status: 'unhealthy', message: 'No available clients' };
    } catch (error) {
      return {
        status: 'unhealthy',
        message: `Unexpected health check error: ${error.message}`
      };
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
      this.logger.warn(`QdrantClient failed for getCollections: ${error.message}`);

      // Try HTTP client as fallback
      if (this.httpClient) {
        try {
          this.logger.log('Trying HTTP client as fallback for getCollections...');
          const response = await this.httpClient.get('/collections');
          this.logger.log('✓ HTTP client getCollections successful');
          return response.data;
        } catch (httpError) {
          this.logger.error(`Both QdrantClient and HTTP client failed for getCollections`, httpError);
        }
      }

      this.logger.error('Failed to get collections', error);
      if (!this.isAvailable()) {
        this.logger.warn('Qdrant is not available, returning empty collections list');
        return { collections: [] };
      }
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
      this.ensureClientInitialized();
      const result = await this.client.createCollection(collectionName, {
        vectors: {
          size: params.size,
          distance: params.distance || 'Cosine',
        },
      });
      this.logger.log(`Created collection: ${collectionName}`);
      return result;
    } catch (error) {
      this.logger.warn(`QdrantClient failed for createCollection: ${error.message}`);
      
      // Try HTTP client as fallback
      if (this.httpClient) {
        try {
          this.logger.log('Trying HTTP client as fallback for createCollection...');
          const response = await this.httpClient.put(`/collections/${collectionName}`, {
            vectors: {
              size: params.size,
              distance: params.distance || 'Cosine',
            },
          });
          this.logger.log(`✓ Created collection via HTTP client: ${collectionName}`);
          return response.data;
        } catch (httpError) {
          this.logger.error(`Both QdrantClient and HTTP client failed for createCollection: ${collectionName}`, httpError);
          throw error; // Throw original error
        }
      }
      
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
      this.logger.warn(`QdrantClient failed for deleteCollection: ${error.message}`);
      
      // Try HTTP client as fallback
      if (this.httpClient) {
        try {
          this.logger.log('Trying HTTP client as fallback for deleteCollection...');
          const response = await this.httpClient.delete(`/collections/${collectionName}`);
          this.logger.log(`✓ Deleted collection via HTTP client: ${collectionName}`);
          return response.data;
        } catch (httpError) {
          this.logger.error(`Both QdrantClient and HTTP client failed for deleteCollection: ${collectionName}`, httpError);
          throw error; // Throw original error
        }
      }
      
      this.logger.error(`Failed to delete collection: ${collectionName}`, error);
      throw error;
    }
  }

  /**
   * Check if collection exists
   */
  async collectionExists(collectionName: string): Promise<boolean> {
    try {
      this.ensureClientInitialized();
      const collections = await this.client.getCollections();
      return collections.collections.some(col => col.name === collectionName);
    } catch (error) {
      this.logger.error(`Failed to check collection existence: ${collectionName}`, error);
      if (!this.isAvailable()) {
        this.logger.warn('Qdrant is not available, assuming collection does not exist');
        return false;
      }
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
      this.logger.warn(`QdrantClient failed for getCollectionInfo: ${error.message}`);
      
      // Try HTTP client as fallback
      if (this.httpClient) {
        try {
          this.logger.log('Trying HTTP client as fallback for getCollectionInfo...');
          const response = await this.httpClient.get(`/collections/${collectionName}`);
          return response.data;
        } catch (httpError) {
          this.logger.error(`Both QdrantClient and HTTP client failed for getCollectionInfo: ${collectionName}`, httpError);
          throw error; // Throw original error
        }
      }
      
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
