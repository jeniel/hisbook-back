import { OpenAIEmbeddings } from '@langchain/openai';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class EmbeddingService {
    private readonly logger = new Logger(EmbeddingService.name);
    private embeddings: OpenAIEmbeddings;

    constructor() {
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            throw new Error('OPENAI_API_KEY is required for embedding service');
        }

        this.embeddings = new OpenAIEmbeddings({
            openAIApiKey: apiKey,
            modelName: 'text-embedding-ada-002',
            batchSize: 512,
            maxRetries: 3,
        });

        this.logger.log('EmbeddingService initialized with OpenAI embeddings');
    }

    /**
     * Generate embedding for a single text query
     */
    async generateEmbedding(text: string): Promise<number[]> {
        try {
            if (!text || text.trim() === '') {
                throw new Error('Text cannot be empty');
            }

            const embedding = await this.embeddings.embedQuery(text);
            this.logger.debug(`Generated embedding for text of length ${text.length}`);
            return embedding;
        } catch (error) {
            this.logger.error('Failed to generate embedding', error);
            throw error;
        }
    }

    /**
     * Generate embeddings for multiple documents
     */
    async generateEmbeddings(texts: string[]): Promise<number[][]> {
        try {
            if (!texts || texts.length === 0) {
                return [];
            }

            // Filter out empty texts
            const validTexts = texts.filter(text => text && text.trim() !== '');

            if (validTexts.length === 0) {
                return [];
            }

            const embeddings = await this.embeddings.embedDocuments(validTexts);
            this.logger.debug(`Generated embeddings for ${validTexts.length} documents`);
            return embeddings;
        } catch (error) {
            this.logger.error('Failed to generate embeddings', error);
            throw error;
        }
    }

    /**
     * Get the dimension size of the embeddings
     */
    getEmbeddingDimension(): number {
        // OpenAI text-embedding-ada-002 returns 1536-dimensional vectors
        return 1536;
    }

    /**
     * Calculate cosine similarity between two embeddings
     */
    calculateCosineSimilarity(embedding1: number[], embedding2: number[]): number {
        if (embedding1.length !== embedding2.length) {
            throw new Error('Embeddings must have the same dimension');
        }

        let dotProduct = 0;
        let norm1 = 0;
        let norm2 = 0;

        for (let i = 0; i < embedding1.length; i++) {
            dotProduct += embedding1[i] * embedding2[i];
            norm1 += embedding1[i] * embedding1[i];
            norm2 += embedding2[i] * embedding2[i];
        }

        norm1 = Math.sqrt(norm1);
        norm2 = Math.sqrt(norm2);

        if (norm1 === 0 || norm2 === 0) {
            return 0;
        }

        return dotProduct / (norm1 * norm2);
    }

    /**
     * Preprocess text before embedding (optional cleanup)
     */
    preprocessText(text: string): string {
        return text
            .trim()
            .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
            .replace(/\n+/g, ' ') // Replace newlines with space
            .substring(0, 8000); // Limit to reasonable length for embeddings
    }

    /**
     * Generate embedding with preprocessing
     */
    async generateEmbeddingWithPreprocessing(text: string): Promise<number[]> {
        const processedText = this.preprocessText(text);
        return this.generateEmbedding(processedText);
    }

    /**
     * Health check for the embedding service
     */
    async healthCheck(): Promise<boolean> {
        try {
            await this.generateEmbedding('test');
            return true;
        } catch (error) {
            this.logger.error('Embedding service health check failed', error);
            return false;
        }
    }
}
