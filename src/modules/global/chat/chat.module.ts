import { ChatResolver } from '@/modules/global/chat/chat.resolver';
import { Module } from '@nestjs/common';
import { LangchainModule } from '../langchain/langchain.module';
import { ChatService } from './chat.service';

@Module({
  imports: [LangchainModule],
  providers: [ChatService, ChatResolver],
})
export class ChatModule {}
