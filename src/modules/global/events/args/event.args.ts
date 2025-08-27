import { EventWhereInput } from '@/generated/event/event-where.input';
import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ArgsType()
export class EventArgs {
  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  perPage?: number;

  @Field(() => EventWhereInput, { nullable: true })
  @Type(() => EventWhereInput)
  where?: EventWhereInput;
}
