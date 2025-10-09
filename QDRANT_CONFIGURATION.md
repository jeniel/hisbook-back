# Qdrant Configuration Guide

This guide explains how to configure Qdrant vector database connection for the application.

## Environment Variables

Add2. Test connectivity using curl or similar tools:
   ```bash
   # Test basic connectivity
   curl "https://qdrant.acemcbohol.dev"
   
   # Test collections endpoint (requires API key)
   curl -H "api-key: YOUR_API_KEY" "https://qdrant.acemcbohol.dev/collections"
   ```se environment variables to your `.env` file:

### Required
- `QDRANT_URL` - The URL of your Qdrant instance
  - **Example**: `https://qdrant.acemcbohol.dev` (note: no port for standard HTTPS)
  - **Local**: `http://localhost:6333`
  - **Default**: `http://localhost:6333`

### Required for Production
- `QDRANT_API_KEY` - API key for authentication (required for production instances)
  - **Example**: `your-secret-api-key`
  - **Default**: None (no authentication)
  - **Note**: Production Qdrant instances typically require authentication

- `QDRANT_TIMEOUT` - Connection timeout in milliseconds
  - **Example**: `30000` (30 seconds)
  - **Default**: `30000`
  - **Range**: 1 to 300000 (5 minutes max)

- `QDRANT_MAX_RETRIES` - Maximum number of connection retry attempts
  - **Example**: `3`
  - **Default**: `3`
  - **Range**: 0 to 10

## Example .env Configuration

```bash
# Qdrant Configuration
QDRANT_URL=https://qdrant.acemcbohol.dev
QDRANT_API_KEY=your-api-key-here
QDRANT_TIMEOUT=30000
QDRANT_MAX_RETRIES=3

# OpenAI Configuration (required for embeddings)
OPENAI_API_KEY=your-openai-api-key-here
```

## Troubleshooting Connection Issues

### Common Issues and Solutions

1. **Connection Timeout Error**
   ```
   ConnectTimeoutError: Connect Timeout Error (attempted address: qdrant.acemcbohol.dev:6333, timeout: 10000ms)
   ```
   
   **Solutions**:
   - **Check the port**: Many hosted Qdrant instances run on standard HTTPS port (443), not 6333
     - Try `https://qdrant.acemcbohol.dev` instead of `https://qdrant.acemcbohol.dev:6333`
   - Test connectivity: `curl "https://qdrant.acemcbohol.dev"`
   - Increase `QDRANT_TIMEOUT` to 30000 or higher
   - Check if the Qdrant service is running and accessible
   - Verify network connectivity to the Qdrant server
   - Check firewall rules

2. **Authentication Required Error**
   ```
   Must provide an API key or an Authorization bearer token
   ```
   
   **Solutions**:
   - Add your API key to the `QDRANT_API_KEY` environment variable
   - Contact your Qdrant service administrator for the correct API key
   - Verify the API key format and permissions

2. **SSL/TLS Certificate Issues (HTTPS URLs)**
   - Ensure the SSL certificate is valid and trusted
   - For development, consider using HTTP instead of HTTPS (if available)
   - Check if the domain certificate has expired

3. **Authentication Errors**
   - Verify the `QDRANT_API_KEY` is correct
   - Check if your Qdrant instance requires authentication
   - Ensure the API key has the necessary permissions

4. **Port Connectivity Issues**
   - Hosted Qdrant services often use standard HTTPS port (443) instead of 6333
   - Try removing the port from the URL: use `https://domain.com` instead of `https://domain.com:6333`
   - For local instances, port 6333 is typically correct

5. **DNS Resolution Issues**
   - Verify the domain name resolves correctly
   - Try using an IP address instead of domain name for testing

### Testing Connection

The application will automatically test the connection on startup. Look for these log messages:

✅ **Success**:
```
[QdrantService] ✓ Connected to Qdrant successfully
[QdrantService] Found X collections
```

❌ **Failure**:
```
[QdrantService] Failed to connect to Qdrant after 3 attempts
[QdrantService] Last error: <error message>
```

### Health Check Endpoint

You can check Qdrant connectivity at runtime using the health check method in the QdrantService.

## Graceful Degradation

The application is designed to work even when Qdrant is unavailable:

- ✅ Application will start successfully
- ✅ Non-vector operations will work normally
- ⚠️ Vector search and document embedding features will be disabled
- ⚠️ Warning messages will be logged when vector operations are attempted

## Performance Tuning

For production environments, consider these settings:

```bash
# Production settings
QDRANT_TIMEOUT=60000        # 60 seconds for slower networks
QDRANT_MAX_RETRIES=5        # More retries for reliability
```

For development with local Qdrant:

```bash
# Development settings
QDRANT_URL=http://localhost:6333
QDRANT_TIMEOUT=10000        # 10 seconds is usually sufficient
QDRANT_MAX_RETRIES=2        # Fewer retries for faster feedback
```

## Docker Deployment

If running Qdrant in Docker, ensure:

1. **Network connectivity**: The application container can reach the Qdrant container
2. **Port mapping**: Qdrant port (6333) is properly exposed
3. **Health checks**: Qdrant is fully initialized before the application starts

## Support

If you continue to experience connection issues:

1. Check the application logs for detailed error messages
2. Verify Qdrant service status and logs
3. Test connectivity using curl or similar tools:
   ```bash
   curl -X GET "https://qdrant.acemcbohol.dev:6333/collections"
   ```