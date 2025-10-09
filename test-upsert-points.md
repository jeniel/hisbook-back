# Testing upsertPoints

## Method 1: GraphQL Mutation (Recommended)

### 1. Basic test with simple vectors:

```graphql
mutation TestUpsertPoints {
  upsertQdrantPoints(input: {
    collectionName: "test_collection"
    points: [
      {
        id: "point1"
        vector: [0.1, 0.2, 0.3, 0.4, 0.5]
        payload: {
          title: "Test Document 1"
          category: "testing"
          timestamp: "2025-10-09T00:00:00Z"
        }
      }
      {
        id: "point2" 
        vector: [0.6, 0.7, 0.8, 0.9, 1.0]
        payload: {
          title: "Test Document 2"
          category: "testing"
          timestamp: "2025-10-09T01:00:00Z"
        }
      }
    ]
  })
}
```

### 2. Test with actual embeddings (using embedding service):

First generate embeddings, then upsert:

```graphql
# Step 1: Create collection if it doesn't exist
mutation CreateTestCollection {
  createQdrantCollection(input: {
    name: "test_embeddings"
    size: 1536  # OpenAI embedding size
    distance: "Cosine"
  })
}

# Step 2: Upsert points with real embeddings
mutation UpsertWithEmbeddings {
  upsertQdrantPoints(input: {
    collectionName: "test_embeddings"
    points: [
      {
        id: "doc1"
        # You'll need to generate this vector using the embedding service first
        vector: [/* 1536 dimensional vector from OpenAI */]
        payload: {
          content: "This is a test document about machine learning"
          type: "article"
          author: "Test Author"
        }
      }
    ]
  })
}
```

### 3. Test with batch data:

```graphql
mutation BatchUpsertTest {
  upsertQdrantPoints(input: {
    collectionName: "batch_test"
    points: [
      {
        id: 1
        vector: [0.1, 0.2, 0.3]
        payload: { type: "customer", name: "Alice" }
      }
      {
        id: 2
        vector: [0.4, 0.5, 0.6]
        payload: { type: "customer", name: "Bob" }
      }
      {
        id: 3
        vector: [0.7, 0.8, 0.9]
        payload: { type: "product", name: "Widget A" }
      }
    ]
  })
}
```

## Method 2: Direct Service Testing (Node.js Script)

Create a test script to test the service directly:

```javascript
// test-upsert.js
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');

async function testUpsertPoints() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const qdrantService = app.get('QdrantService');
  
  try {
    // Test data
    const testPoints = [
      {
        id: 'test1',
        vector: [0.1, 0.2, 0.3, 0.4, 0.5],
        payload: {
          title: 'Test Document 1',
          category: 'testing'
        }
      },
      {
        id: 'test2', 
        vector: [0.6, 0.7, 0.8, 0.9, 1.0],
        payload: {
          title: 'Test Document 2',
          category: 'testing'
        }
      }
    ];

    console.log('Testing upsertPoints...');
    const result = await qdrantService.upsertPoints('test_collection', testPoints);
    console.log('Success:', result);
    
    // Verify the points were inserted
    console.log('Verifying insertion...');
    const retrievedPoints = await qdrantService.retrievePoints('test_collection', ['test1', 'test2']);
    console.log('Retrieved points:', retrievedPoints);
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await app.close();
  }
}

testUpsertPoints();
```

## Method 3: HTTP Client Test (cURL)

```bash
# Direct HTTP test (similar to what our HTTP client does internally)
curl -X PUT "https://qdrant.acemcbohol.dev/collections/test_collection/points" \
  -H "Content-Type: application/json" \
  -H "api-key: your-api-key" \
  -d '{
    "wait": true,
    "points": [
      {
        "id": "test1",
        "vector": [0.1, 0.2, 0.3, 0.4, 0.5],
        "payload": {
          "title": "Test Document 1",
          "category": "testing"
        }
      }
    ]
  }'
```

## Prerequisites for Testing:

1. **Collection must exist first**:
   ```graphql
   mutation CreateCollection {
     createQdrantCollection(input: {
       name: "test_collection"
       size: 5  # Must match your vector dimensions
       distance: "Cosine"
     })
   }
   ```

2. **Vector dimensions must match collection config**
3. **Ensure your application is running**: `yarn start:dev`

## Recommended Testing Steps:

1. **Start with Method 1 (GraphQL)** - easiest and most comprehensive
2. **Create a small test collection** first
3. **Test with simple vectors** (like 3-5 dimensions)
4. **Verify insertion** by querying the points back
5. **Test error cases** (wrong dimensions, invalid collection, etc.)

## Common Issues to Watch For:

- **Vector dimension mismatch**: Vector size must match collection config
- **Collection doesn't exist**: Create collection first
- **Invalid point IDs**: Use strings or numbers, avoid complex objects
- **Payload too large**: Keep payload reasonably sized
- **Network timeouts**: Our optimized version should be much faster now

Would you like me to help you run any of these tests?