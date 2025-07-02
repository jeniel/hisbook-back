import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LangChain {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
