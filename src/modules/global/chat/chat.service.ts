import { Injectable } from '@nestjs/common';
import { LangchainService } from '../langchain/langchain.service';

@Injectable()
export class ChatService {
  constructor(private readonly langchainService: LangchainService) {}

  async askQuestion(userId: string, question: string) {
    const answer = await this.langchainService.ask(userId, question);
    const history = this.langchainService.getHistory(userId);
    return { answer, history };
  }
}
