import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChatMessage {
  @Field()
  user: string;

  @Field()
  assistant: string;
}
