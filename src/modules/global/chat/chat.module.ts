import { Module } from '@nestjs/common';
import { LangchainModule } from '../langchain/langchain.module';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

@Module({
  imports: [LangchainModule],
  providers: [ChatService],
  controllers: [ChatController],
})
export class ChatModule {}
