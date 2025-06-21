import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Fb {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
