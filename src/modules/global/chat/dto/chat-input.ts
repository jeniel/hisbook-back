// src/chat/dto/chat-input.dto.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ChatInput {
  @Field()
  userId: string;

  @Field()
  question: string;
}
