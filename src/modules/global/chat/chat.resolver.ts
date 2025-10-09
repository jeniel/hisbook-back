import { ChatInput } from '@/modules/global/chat/dto/chat-input';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ChatService } from './chat.service';
import { ChatResponse } from './models/chat-response.model';

@Resolver()
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}

  @Mutation(() => ChatResponse)
  async ask(@Args('input') input: ChatInput) {
    const { userId, question } = input;
    const { answer, history } = await this.chatService.askQuestion(
      userId,
      question,
    );
    return { question, answer, history };
  }
}
