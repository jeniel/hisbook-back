import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TicketCount {
  @Field(() => Int)
  count: number;

  @Field(() => String)
  status: string;
}

@ObjectType()
export class TicketCountResponse {
  @Field(() => String)
  message: string;

  @Field(() => [TicketCount])
  data: TicketCount[];
}