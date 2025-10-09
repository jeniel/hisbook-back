import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  // Endpoint
  @Post()
  async ask(
    @Body('userId') userId: string,
    @Body('question') question: string,
  ) {
    const { answer, history } = await this.chatService.askQuestion(
      userId,
      question,
    );
    return { question, answer, history };
  }
}
