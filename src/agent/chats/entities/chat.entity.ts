import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class MessageContent {
  @Field(() => String)
  type: string;

  @Field(() => String)
  content: string;

  @Field(() => [String])
  tool_calls: string[];

  @Field(() => String, { nullable: true })
  additional_kwargs: string; // JSON string

  @Field(() => String, { nullable: true })
  response_metadata: string; // JSON string

  @Field(() => [String])
  invalid_tool_calls: string[];
}

@ObjectType()
export class Chat {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  session_id: string;

  @Field(() => MessageContent)
  message: MessageContent;

  @Field(() => Date, { nullable: true })
  created_at: Date;
}

@ObjectType()
export class Content {
  @Field(() => ID, { description: 'Unique identifier for the content' })
  id: string; // Changed to string to match ID type

  @Field(() => String, { nullable: true })
  content: string;
}

@ObjectType()
export class PaginationChat {
  @Field(() => Int)
  currentPage: number;

  @Field(() => Int)
  totalPages: number;

  @Field(() => Int)
  totalCount: number;

  @Field(() => Int)
  limit: number;

  @Field(() => Boolean)
  hasNextPage: boolean;

  @Field(() => Boolean)
  hasPrevPage: boolean;
}

@ObjectType()
export class ChatResponse {

  @Field(() => [Chat])
  data: Chat[];
  @Field(() => PaginationChat)
  pagination: PaginationChat;
}
