import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFbInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
