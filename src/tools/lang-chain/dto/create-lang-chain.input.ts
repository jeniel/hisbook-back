import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLangChainInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
