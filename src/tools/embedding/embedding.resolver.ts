import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { EmbeddingService } from './embedding.service';
import { Embedding } from './entities/embedding.entity';

@Resolver(() => Embedding)
export class EmbeddingResolver {
  constructor(private readonly embeddingService: EmbeddingService) {}


 @Mutation(() => Embedding)
  async createEmbedding(
    @Args('text', { type: () => String }) text: string,
  ): Promise<Embedding> {
    return this.embeddingService.createEmbedding(text);
  }

}
