import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';
import { LangChain } from './entities/lang-chain.entity';
import { LangChainService } from './lang-chain.service';
import { ContentResponse } from './entities/content';

@Resolver(() => LangChain)
export class LangChainResolver {
  constructor(private readonly langChainService: LangChainService) {}

  @Mutation(() => GeneralMsg)
  createEmbeddings(
    @Args('content', { type: () => String }) content: string,
    @Args('tenantId') tenantId: string,
  ) {
    return this.langChainService.createEmbeddings(content, tenantId);
  }

  @Mutation(() => GeneralMsg)
  updateEmbeddings(
    @Args('content', { type: () => String }) content: string,
    @Args('id') id: number,
    @Args('tenantId') tenantId: string,
  ) {
    return this.langChainService.updateEmbeddings(content, id, tenantId);
  }

  @Mutation(() => GeneralMsg)
  deleteEmbedding(
    @Args('id', { type: () => Int }) id: number,
    @Args('tenantId') tenantId: string,
  ) {
    return this.langChainService.deleteEmbedding(id, tenantId);
  }

  @Query(() => ContentResponse)
  findContent(
    @Args('tenantId', { type: () => String }) tenantId: string,
    @Args('page', { type: () => Int, defaultValue: 1 }) page: number,
    @Args('limit', { type: () => Int, defaultValue: 10 }) limit: number,
  ) {
    return this.langChainService.findContent(tenantId, page, limit);
  }

  @Query(() => String)
  chatWithModel() {
    return this.langChainService.chatWithModel();
  }
}
