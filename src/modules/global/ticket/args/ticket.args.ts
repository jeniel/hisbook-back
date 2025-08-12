import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { MissedLogoutTicketWhereInput } from '@/generated/missed-logout-ticket/missed-logout-ticket-where.input';

@ArgsType()
export class MissedLogoutTicketArgs {
  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  perPage?: number;

  @Field(() => MissedLogoutTicketWhereInput, { nullable: true })
  @Type(() => MissedLogoutTicketWhereInput)
  where?: MissedLogoutTicketWhereInput;
}
