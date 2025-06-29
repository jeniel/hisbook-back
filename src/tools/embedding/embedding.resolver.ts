import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { EmbeddingService } from './embedding.service';
import { Embedding } from './entities/embedding.entity';
import GraphQLJSON from 'graphql-type-json';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';

@Resolver(() => Embedding)
export class EmbeddingResolver {
  constructor(private readonly embeddingService: EmbeddingService) {}

  @Mutation(() => GeneralMsg)
  async createEmbedding(
    @Args('content', { type: () => GraphQLJSON }) content: any,
  ) {
    return this.embeddingService.embedJsonObject(content);
  }
}
