import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { EmbeddingService } from './embedding.service';
import { Embedding } from './entities/embedding.entity';
import GraphQLJSON from 'graphql-type-json';

@Resolver(() => Embedding)
export class EmbeddingResolver {
  constructor(private readonly embeddingService: EmbeddingService) {}

  @Mutation(() => Embedding)
  async createEmbedding(
    @Args('content', { type: () => GraphQLJSON }) content: any,
  ): Promise<Embedding> {
    return this.embeddingService.embedJsonObject(content);
  }
}
