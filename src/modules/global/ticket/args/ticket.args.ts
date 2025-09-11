import { TicketWhereInput } from '@/generated/ticket/ticket-where.input';
import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class TicketArgs {
  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  perPage?: number;

  @Field(() => TicketWhereInput, { nullable: true })
  @Type(() => TicketWhereInput)
  where?: TicketWhereInput;

  @Field(() => String, { nullable: true })
  search?: string;
}
