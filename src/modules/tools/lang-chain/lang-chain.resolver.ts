import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';
import { LangChain } from '@/modules/tools/lang-chain/entities/lang-chain.entity';
import { LangChainService } from '@/modules/tools/lang-chain/lang-chain.service';
import { ContentResponse } from '@/modules/tools/lang-chain/entities/content';
import { ProcessDocumentsInput } from '@/infrastructure/qdrant/dto/qdrant.types';

@Resolver(() => LangChain)
export class LangChainResolver {
  constructor(private readonly langChainService: LangChainService) {}

  // @Mutation(() => GeneralMsg)
  // createEmbeddings(
  //   // @Args('content', { type: () => String }) content: string,
  //   @Args('input') input: ProcessDocumentsInput,
  //   // @Args('tenantId') tenantId: string,
  // ) {
  //   return this.langChainService.createEmbeddings(
  //     input.documents,
  //     input.collectionName,
  //     // tenantId,
  //   );
  // }

  // @Mutation(() => GeneralMsg)
  // updateEmbeddings(
  //   @Args('content', { type: () => String }) content: string,
  //   @Args('id') id: number,
  //   @Args('tenantId') tenantId: string,
  // ) {
  //   return this.langChainService.updateEmbeddings(content, id, tenantId);
  // }

  // @Mutation(() => GeneralMsg)
  // deleteEmbedding(
  //   @Args('id', { type: () => Int }) id: number,
  //   @Args('tenantId') tenantId: string,
  // ) {
  //   return this.langChainService.deleteEmbedding(id, tenantId);
  // }

  // @Query(() => ContentResponse)
  // findContent(
  //   @Args('tenantId', { type: () => String }) tenantId: string,
  //   @Args('page', { type: () => Int, defaultValue: 1 }) page: number,
  //   @Args('limit', { type: () => Int, defaultValue: 10 }) limit: number,
  // ) {
  //   return this.langChainService.findContent(tenantId, page, limit);
  // }

  @Query(() => String)
  chatWithModel() {
    return this.langChainService.chatWithModel();
  }
}
