import { MissedLogoutTicket } from '@/generated/missed-logout-ticket/missed-logout-ticket.model';
import { Meta } from '@/shared/common/entities/pagination-meta';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MissedLogoutTicketList {
  @Field(() => [MissedLogoutTicket])
  data: MissedLogoutTicket[];

  @Field(() => Meta, { nullable: true })
  meta?: Meta;
}
