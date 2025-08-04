# Qdrant Vector Database Integration

This integration provides a complete vector database solution using Qdrant for your NestJS application. It supports document embeddings, semantic search, and multi-tenant operations.

## Features

- ✅ Vector similarity search
- ✅ Multi-tenant document isolation
- ✅ Semantic and hybrid search
- ✅ Document type filtering
- ✅ Batch operations
- ✅ Collection management
- ✅ Payload indexing for fast filtering
- ✅ RESTful API endpoints
- ✅ Integration with OpenAI embeddings

## Setup

### 1. Environment Variables

Add the following to your `.env` file:

```env
# Qdrant Configuration
QDRANT_URL="http://localhost:6333"
QDRANT_API_KEY=""

# For Qdrant Cloud:
# QDRANT_URL="https://xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.us-east-0-1.aws.cloud.qdrant.io"
# QDRANT_API_KEY="your-api-key-here"
```

### 2. Start Qdrant Server

**Option A: Using Docker Compose (Recommended)**
```bash
docker-compose -f docker-compose.qdrant.yml up -d
```

**Option B: Using Docker directly**
```bash
docker run -p 6333:6333 -p 6334:6334 qdrant/qdrant:latest
```

**Option C: Using Qdrant Cloud**
Sign up at [Qdrant Cloud](https://cloud.qdrant.io/) and use the provided connection details.

### 3. Verify Installation

Check if Qdrant is running:
```bash
curl http://localhost:6333/collections
```

## Services

### QdrantService

Low-level service for direct Qdrant operations:

```typescript
import { QdrantService } from './infrastructure/qdrant/qdrant.service';

@Injectable()
export class MyService {
  constructor(private readonly qdrantService: QdrantService) {}

  async createCollection() {
    await this.qdrantService.createCollection('my-collection', {
      size: 1536, // OpenAI embedding size
      distance: 'Cosine',
    });
  }

  async searchVectors() {
    const results = await this.qdrantService.search('my-collection', {
      vector: [0.1, 0.2, ...], // Your query vector
      limit: 10,
      filter: {
        must: [{ key: 'tenant_id', match: { value: 'tenant-123' } }]
      }
    });
  }
}
```

### VectorSearchService

High-level service for document-based vector operations:

```typescript
import { VectorSearchService } from './infrastructure/qdrant/vector-search.service';

@Injectable()
export class MyService {
  constructor(private readonly vectorSearchService: VectorSearchService) {}

  async storeDocuments() {
    const documents = [
      {
        id: 'doc-1',
        content: 'This is a sample document',
        embedding: [0.1, 0.2, ...], // Pre-generated embedding
        metadata: { tenant_id: 'tenant-123', document_type: 'article' }
      }
    ];

    await this.vectorSearchService.storeDocumentEmbeddings(
      'documents',
      documents
    );
  }

  async searchSimilar() {
    const results = await this.vectorSearchService.searchByTenant(
      'documents',
      'tenant-123',
      [0.1, 0.2, ...], // Query embedding
      10, // limit
      0.7 // similarity threshold
    );
  }
}
```

### DocumentEmbeddingService

Complete service that handles embedding generation and storage:

```typescript
import { DocumentEmbeddingService } from './infrastructure/qdrant/document-embedding.service';

@Injectable()
export class MyService {
  constructor(private readonly docEmbeddingService: DocumentEmbeddingService) {}

  async processDocuments() {
    const documents = [
      {
        id: 'doc-1',
        content: 'This is a sample document',
        tenantId: 'tenant-123',
        documentType: 'article',
        metadata: { author: 'John Doe', category: 'tech' }
      }
    ];

    // This will generate embeddings and store in Qdrant
    await this.docEmbeddingService.processAndStoreDocuments(documents);
  }

  async semanticSearch() {
    const results = await this.docEmbeddingService.semanticSearch(
      'search query',
      'tenant-123',
      {
        limit: 10,
        threshold: 0.8,
        documentType: 'article'
      }
    );
  }

  async hybridSearch() {
    const results = await this.docEmbeddingService.hybridSearch(
      'search query',
      ['keyword1', 'keyword2'],
      'tenant-123',
      { limit: 10 }
    );
  }
}
```

## API Endpoints

### Collections

- `GET /qdrant/collections` - List all collections
- `POST /qdrant/collections` - Create a collection
- `GET /qdrant/collections/:name` - Get collection info
- `DELETE /qdrant/collections/:name` - Delete collection

### Points (Documents)

- `POST /qdrant/collections/:name/points` - Insert/update points
- `GET /qdrant/collections/:name/points?ids=1,2,3` - Retrieve points
- `DELETE /qdrant/collections/:name/points?ids=1,2,3` - Delete points
- `POST /qdrant/collections/:name/search` - Vector search
- `POST /qdrant/collections/:name/query` - Advanced query
- `GET /qdrant/collections/:name/count` - Count points
- `GET /qdrant/collections/:name/scroll` - Paginate through points

### Indexes

- `POST /qdrant/collections/:name/index` - Create payload index

## Example API Usage

### Create a Collection
```bash
curl -X POST http://localhost:3000/qdrant/collections \
  -H "Content-Type: application/json" \
  -d '{
    "name": "documents",
    "size": 1536,
    "distance": "Cosine"
  }'
```

### Insert Documents
```bash
curl -X POST http://localhost:3000/qdrant/collections/documents/points \
  -H "Content-Type: application/json" \
  -d '{
    "points": [
      {
        "id": "doc-1",
        "vector": [0.1, 0.2, 0.3, ...],
        "payload": {
          "content": "Sample document content",
          "tenant_id": "tenant-123",
          "document_type": "article"
        }
      }
    ]
  }'
```

### Search Documents
```bash
curl -X POST http://localhost:3000/qdrant/collections/documents/search \
  -H "Content-Type: application/json" \
  -d '{
    "vector": [0.1, 0.2, 0.3, ...],
    "limit": 10,
    "filter": {
      "must": [
        {"key": "tenant_id", "match": {"value": "tenant-123"}}
      ]
    },
    "with_payload": true
  }'
```

## Best Practices

### 1. Collection Naming
- Use descriptive names: `documents`, `chat_history`, `embeddings`
- Include environment prefix for multi-environment setups: `prod_documents`, `dev_documents`

### 2. Tenant Isolation
Always include tenant filtering in your searches:
```typescript
const filter = {
  must: [
    { key: 'tenant_id', match: { value: tenantId } }
  ]
};
```

### 3. Payload Indexing
Create indexes for frequently filtered fields:
```typescript
await qdrantService.createPayloadIndex('documents', 'tenant_id', 'keyword');
await qdrantService.createPayloadIndex('documents', 'document_type', 'keyword');
await qdrantService.createPayloadIndex('documents', 'created_at', 'integer');
```

### 4. Batch Operations
Process documents in batches for better performance:
```typescript
const batchSize = 100;
for (let i = 0; i < documents.length; i += batchSize) {
  const batch = documents.slice(i, i + batchSize);
  await vectorSearchService.storeDocumentEmbeddings(collectionName, batch);
}
```

### 5. Error Handling
Always wrap Qdrant operations in try-catch blocks:
```typescript
try {
  const results = await qdrantService.search(collectionName, searchParams);
  return results;
} catch (error) {
  logger.error('Search failed', error);
  throw new HttpException('Search failed', HttpStatus.INTERNAL_SERVER_ERROR);
}
```

## Monitoring and Debugging

### Check Qdrant Health
```bash
curl http://localhost:6333/
```

### View Collection Stats
```bash
curl http://localhost:6333/collections/documents
```

### Monitor Logs
```bash
docker logs qdrant
```

## Troubleshooting

### Common Issues

1. **Connection Failed**
   - Check if Qdrant is running: `docker ps`
   - Verify environment variables are set correctly
   - Check firewall settings

2. **Collection Not Found**
   - Ensure collection is created before operations
   - Use `collectionExists()` method to check

3. **Vector Dimension Mismatch**
   - Ensure all vectors have the same dimension as collection
   - OpenAI text-embedding-3-small uses 1536 dimensions

4. **Slow Search Performance**
   - Create payload indexes for filtered fields
   - Consider using smaller vector dimensions
   - Optimize your filtering conditions

5. **Memory Issues**
   - Reduce batch sizes for large operations
   - Monitor Qdrant memory usage
   - Consider using Qdrant Cloud for production

## Production Considerations

1. **Backup Strategy**
   - Regular backups of Qdrant data
   - Test restoration procedures

2. **Scaling**
   - Use Qdrant Cloud for managed scaling
   - Consider horizontal scaling with multiple collections

3. **Security**
   - Use API keys in production
   - Enable TLS/SSL for connections
   - Implement proper authentication

4. **Monitoring**
   - Set up alerts for Qdrant health
   - Monitor query performance
   - Track collection sizes and growth

## Resources

- [Qdrant Documentation](https://qdrant.tech/documentation/)
- [Qdrant JavaScript Client](https://github.com/qdrant/qdrant-js)
- [OpenAI Embeddings](https://platform.openai.com/docs/guides/embeddings)
- [Vector Database Best Practices](https://qdrant.tech/articles/vector-database/)
