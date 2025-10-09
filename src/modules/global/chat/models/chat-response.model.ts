import { Field, ObjectType } from '@nestjs/graphql';
import { ChatMessage } from './chat-message.model';

@ObjectType()
export class ChatResponse {
  @Field()
  question: string;

  @Field()
  answer: string;

  @Field(() => [ChatMessage])
  history: ChatMessage[];
}
