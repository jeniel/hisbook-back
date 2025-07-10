import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Content {
  @Field(() => ID, { description: 'Unique identifier for the content' })
  id: string; // Changed to string to match ID type

  @Field(() => String, { nullable: true })
  content: string;
}

@ObjectType()
export class Pagination {
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
export class ContentResponse {
  @Field(() => [Content])
  content: Content[]; // Changed from [Content] to Content[] for better TypeScript compatibility

  @Field(() => Pagination)
  pagination: Pagination;

  @Field(() => String)
  message: string;
}