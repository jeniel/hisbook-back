import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LangChainService } from './lang-chain.service';
import { LangChain } from './entities/lang-chain.entity';
import { CreateLangChainInput } from './dto/create-lang-chain.input';
import { UpdateLangChainInput } from './dto/update-lang-chain.input';
import GraphQLJSON from 'graphql-type-json';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';

@Resolver(() => LangChain)
export class LangChainResolver {
  constructor(private readonly langChainService: LangChainService) {}

  @Mutation(() => GeneralMsg)
  createEmbbedings(
    @Args('content', { type: () => String }) content: string,
    @Args('tenantId') tenantId: string,
  ) {
    return this.langChainService.createEmbbedings(content, tenantId);
  }

  @Mutation(() => GeneralMsg)
  updateEmbbedings(
    @Args('content', { type: () => String }) content: string,
    @Args('id') id: number,
  ) {
    return this.langChainService.updateEmbbedings(content, id);
  }

  @Query(() => GeneralMsg)
  findContent(@Args('tenantId') tenantId: string) {
    return this.langChainService.findContent(tenantId);
  }

  @Query(() => String)
  chatWithModel() {
    return this.langChainService.chatWithModel();
  }
}
