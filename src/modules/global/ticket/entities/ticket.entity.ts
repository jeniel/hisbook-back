import { Ticket } from '@/generated/ticket/ticket.model';
import { Meta } from '@/shared/common/entities/pagination-meta';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TicketList {
  @Field(() => [Ticket])
  data: Ticket[];

  @Field(() => Meta, { nullable: true })
  meta: Meta;
}
