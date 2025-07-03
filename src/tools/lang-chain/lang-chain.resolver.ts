import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LangChainService } from './lang-chain.service';
import { LangChain } from './entities/lang-chain.entity';
import { CreateLangChainInput } from './dto/create-lang-chain.input';
import { UpdateLangChainInput } from './dto/update-lang-chain.input';
import GraphQLJSON from 'graphql-type-json';

@Resolver(() => LangChain)
export class LangChainResolver {
  constructor(private readonly langChainService: LangChainService) {}

  @Mutation(() => LangChain)
  embedText(@Args('content', { type: () => GraphQLJSON }) content: any) {
    return this.langChainService.embedText(content);
  }

  @Query(() => String)
  chatWithModel() { 
    return this.langChainService.chatWithModel();
  }
}
