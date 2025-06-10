import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmbeddingInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
