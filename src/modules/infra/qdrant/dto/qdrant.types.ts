import { Field, Float, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class QdrantCollectionType {
  @Field()
  name: string;
}

@ObjectType()
export class QdrantCollectionInfoType {
  @Field()
  status: string;

  @Field(() => Int)
  points_count: number;

  @Field(() => Int)
  vectors_count: number;

  @Field(() => Int)
  indexed_vectors_count: number;

  @Field(() => GraphQLJSON, { nullable: true })
  payload_schema: any;

  @Field(() => GraphQLJSON, { nullable: true })
  config: any;
}

@ObjectType()
export class QdrantPointType {
  @Field(() => ID)
  id: string | number;

  @Field(() => Int, { nullable: true })
  version?: number;

  @Field(() => Float, { nullable: true })
  score?: number;

  @Field(() => GraphQLJSON, { nullable: true })
  payload?: any;

  @Field(() => [Float], { nullable: true })
  vector?: number[];
}

@ObjectType()
export class QdrantSearchResultType {
  @Field(() => ID)
  id: string | number;

  @Field(() => Float)
  score: number;

  @Field(() => GraphQLJSON, { nullable: true })
  payload?: any;

  @Field(() => [Float], { nullable: true })
  vector?: number[];

  @Field({ nullable: true })
  content?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;
}

@ObjectType()
export class QdrantCountResultType {
  @Field(() => Int)
  count: number;
}

@ObjectType()
export class QdrantScrollResultType {
  @Field(() => [QdrantPointType])
  points: QdrantPointType[];

  @Field({ nullable: true })
  next_page_offset?: string;
}

@ObjectType()
export class QdrantHealthStatusType {
  @Field()
  status: string;

  @Field()
  message: string;

  @Field()
  isAvailable: boolean;
}

// Input Types
@InputType()
export class CreateCollectionInput {
  @Field()
  name: string;

  @Field(() => Int)
  size: number;

  @Field({ defaultValue: 'Cosine' })
  distance?: 'Cosine' | 'Euclid' | 'Dot';
}

@InputType()
export class QdrantPointInput {
  @Field(() => ID)
  id: string | number;

  @Field(() => [Float])
  vector: number[];

  @Field(() => GraphQLJSON, { nullable: true })
  payload?: any;
}

@InputType()
export class UpsertPointsInput {
  @Field()
  collectionName: string;

  @Field(() => [QdrantPointInput])
  points: QdrantPointInput[];
}

@InputType()
export class SearchPointsInput {
  @Field()
  collectionName: string;

  @Field(() => [Float])
  vector: number[];

  @Field(() => Int, { defaultValue: 10 })
  limit?: number;

  @Field(() => GraphQLJSON, { nullable: true })
  filter?: any;

  @Field({ defaultValue: true })
  withPayload?: boolean;

  @Field({ defaultValue: false })
  withVector?: boolean;
}

@InputType()
export class ScrollPointsInput {
  @Field()
  collectionName: string;

  @Field(() => Int, { defaultValue: 100 })
  limit?: number;

  @Field({ nullable: true })
  offset?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  filter?: any;
}

@InputType()
export class CreateIndexInput {
  @Field()
  collectionName: string;

  @Field()
  fieldName: string;

  @Field({ defaultValue: 'keyword' })
  fieldSchema?: 'keyword' | 'integer' | 'float' | 'geo' | 'text' | 'bool';
}

@InputType()
export class SemanticSearchInput {
  @Field()
  query: string;

  @Field()
  tenantId: string;

  @Field({ defaultValue: 'documents' })
  collectionName?: string;

  @Field(() => Int, { defaultValue: 10 })
  limit?: number;

  @Field(() => Float, { defaultValue: 0.7 })
  threshold?: number;

  @Field({ nullable: true })
  documentType?: string;
}

@InputType()
export class DocumentToEmbedInput {
  @Field({ nullable: true })
  id?: string;

  @Field()
  content: string;

  @Field()
  documentType: string;

  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;
}

@InputType()
export class ProcessDocumentsInput {
  @Field(() => [DocumentToEmbedInput])
  documents: DocumentToEmbedInput[];

  @Field({ defaultValue: 'documents' })
  collectionName?: string;
}

@InputType()
export class BatchSearchInput {
  @Field()
  collectionName: string;

  @Field(() => [SearchPointsInput])
  searches: SearchPointsInput[];
}

@ObjectType()
export class QdrantBatchSearchResultType {
  @Field(() => [[QdrantSearchResultType]])
  results: QdrantSearchResultType[][];
}
