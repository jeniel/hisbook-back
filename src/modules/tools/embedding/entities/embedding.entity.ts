import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class Embedding {
  // @Field(() => Int)
  // id: number;

  @Field(() => GraphQLJSON, { nullable: true })
  content?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;

  @Field(() => [Number], { nullable: true })
  embedding: number[];
}
