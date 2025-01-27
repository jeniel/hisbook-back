import { Field, InputType } from '@nestjs/graphql';
import { TicketPriority } from 'src/@generated/prisma/ticket-priority.enum';
import { TicketStatus } from 'src/@generated/prisma/ticket-status.enum';

@InputType()
export class UpdateTicket {
  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  ticketAssignedTo?: string;

  @Field(() => TicketStatus, { nullable: true, defaultValue: 'OPEN' })
  status: keyof typeof TicketStatus | null;

  @Field(() => TicketPriority, { nullable: true, defaultValue: 'LOW' })
  priority: keyof typeof TicketPriority | null;

  @Field(() => String, { nullable: true })
  ticketCategoryId: string;
}
