import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Embedding {
  @Field(() => ID)
  id: string;

  @Field()
  text: string;

  @Field(() => [Number])
  vector: number[];

  @Field()
  createdAt: Date;
}
