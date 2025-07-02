import { Module } from '@nestjs/common';
import { LangChainService } from './lang-chain.service';
import { LangChainResolver } from './lang-chain.resolver';

@Module({
  providers: [LangChainResolver, LangChainService],
})
export class LangChainModule {}
