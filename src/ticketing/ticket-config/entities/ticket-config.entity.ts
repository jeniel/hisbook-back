import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TicketConfig {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
